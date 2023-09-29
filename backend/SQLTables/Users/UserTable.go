package users

import "database/sql"

func CreateUserTable(s *sql.DB) error {
	_, usrTblErr := s.Exec(`
		CREATE TABLE IF NOT EXISTS "user" (
			"id" INTEGER PRIMARY KEY AUTOINCREMENT,
			"first_name" VARCHAR(64),
			"last_name" VARCHAR(64),
			"dob" TIMESTAMP,
			"email" TEXT,
			"avatar" TEXT,
			"username" VARCHAR(64) NOT NULL UNIQUE,
			"password" VARCHAR(64) NOT NULL,
			"created_at" TIMESTAMP)`,
	)
	if usrTblErr != nil {
		return usrTblErr
	}
	return nil
}
