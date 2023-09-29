package api

import (
	"database/sql"
	// "fmt"
	"log"

	users "github.com/Jasonasante/PHChurchDemo/backend/SQLTables/Users"
	_ "github.com/mattn/go-sqlite3"
)

type Storage interface {
	CreateUserTable() error
}

type QueryResult interface {
	Scan(dest ...interface{}) error
}

type SQLiteStore struct {
	db *sql.DB
}

//
// Initialisation
//

func NewDB() (*SQLiteStore, error) {
	db, err := sql.Open("sqlite3", "backend/db/database.db")
	if err != nil {
		log.Fatal(err)
	}

	return &SQLiteStore{
		db: db,
	}, nil
}

func (s *SQLiteStore) Init() error {
	// if err:=s.DropTable("transfer"); err!=nil {return err}
	if err := s.CreateUserTable(); err != nil {
		return err
	}
	// if err := s.CreateTransferTable(); err != nil {
	// 	return err
	// }
	return nil
}

func (s *SQLiteStore) DropTable(name string) error {
	_, tblErr := s.db.Exec("DROP TABLE " + name)

	if tblErr != nil {
		return tblErr
	}

	return nil
}

// //
// // Users
// //

func (s *SQLiteStore) CreateUserTable() error {
	if err := users.CreateUserTable(s.db); err!=nil{
		return err
	}
	return nil
}
