package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type App struct {}

type SDefaultSettings struct {
	MinLength int
	MaxLength int
	UseComplex bool
	UseCaps bool
}

func GetDefaultSettings() SDefaultSettings {
	def := SDefaultSettings{
		MinLength: 8,
		MaxLength: 16,
		UseComplex: true,
		UseCaps: true,
	}

	return def
}

const WEB_PORT = "4001"

func main() {
	app := App{}

	r := gin.Default()
	r.Use(cors.Default())

	r.POST("/gen", app.generatePassword)

	r.Run(fmt.Sprintf(":%s", WEB_PORT))
}