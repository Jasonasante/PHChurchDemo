package main

import (
	"log"

	"github.com/Jasonasante/PHChurchDemo/backend/api"
)

func main() {
	store, err := api.NewDB()
	if err != nil {
		log.Fatal(err)
	}
	if err := store.Init(); err != nil {
		log.Fatal(err)
	}
	server := api.NewServer(":3500", store)
	server.Run()
}
