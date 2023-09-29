package users

import "time"

type CreateUser struct{
	FirstName string
	LastName string
	DOB time.Time
	Email string
	Avatar string
	Username string
	Password string
	CreatedAt time.Time
}

type User struct {
	Id        int
	FirstName string
	LastName  string
	DOB       time.Time
	Email     string
	Avatar    string
	Username  string
	Password  string
	CreatedAt time.Time
	// Followers
	// Following
	// Bio
}
