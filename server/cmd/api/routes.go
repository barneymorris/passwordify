package main

import (
	"encoding/json"
	"io"
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sethvargo/go-password/password"
)

func (app *App) generatePassword(c *gin.Context) {

	type Response struct {
		MinLength int `json:"minLength,omitempty"`
		MaxLength int `json:"maxLength,omitempty"`
	}

	jsonData, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "error",
			"response": nil,
		})
	}

	var decoded Response

	err = json.Unmarshal(jsonData, &decoded)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "error",
			"response": nil,
		})
	}

	def := GetDefaultSettings()

	if (decoded.MinLength != 0) {
		def.MinLength = decoded.MinLength
	}

	if (decoded.MaxLength != 0) {
		def.MaxLength = decoded.MaxLength
	}

	rand.Seed(time.Now().UnixNano())
	length := rand.Intn((def.MaxLength - def.MinLength) + 1) + def.MinLength

	resp, err := password.Generate(length, length / 2, length / 2, true, true)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "error",
			"response": nil,
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
		"response": resp,
	})
}