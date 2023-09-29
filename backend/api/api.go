package api

import (
	"encoding/json"
	// "fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func WriteJSON(w http.ResponseWriter, status int, v interface{}) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

// apiFunc is a custom type representing a function signature.
// It takes a function that has a http.ResponseWriter and an http.Request as parameters and returns an error.
type apiFunc func(w http.ResponseWriter, r *http.Request) error

type apiError struct {
	Error string
}

func makeHttpHandler(f apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			WriteJSON(w, http.StatusBadRequest, apiError{Error: err.Error()})
		}
	}
}

type Server struct {
	listenAddr string
	store      Storage
}

// Storage is an interface type populated with methods. So any type/struct that contains these methods
// will be acceptable as an input parameter
func NewServer(listenAddr string, store Storage) *Server {
	return &Server{
		listenAddr,
		store,
	}
}

func (s *Server) Run() {
	router := mux.NewRouter()
	router.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))

	router.HandleFunc("/", makeHttpHandler(s.HomePage))
	log.Println("server opened http://localhost" + s.listenAddr)
	http.ListenAndServe(s.listenAddr, router)
}

// CRUD

func (s *Server) HomePage(w http.ResponseWriter, r *http.Request) error {
	if r.URL.Path != "/" {
		http.Redirect(w, r, "/", http.StatusOK)
	}

	t, err := template.ParseFiles("static/index.html")
	if err != nil {
		return err
	}
	return t.Execute(w, nil)
}
