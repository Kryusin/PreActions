package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// フォームのデータ構造体
type FormData struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func main() {
	http.HandleFunc("/api/submit", handleFormSubmit)

	// サーバーの起動
	port := ":8080"
	fmt.Printf("Server is running on http://localhost%s\n", port)
	log.Fatal(http.ListenAndServe(port, nil))
}

// フォーム送信を受け取るハンドラー
func handleFormSubmit(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var formData FormData

		// リクエストのボディからデータをデコード
		err := json.NewDecoder(r.Body).Decode(&formData)
		if err != nil {
			http.Error(w, "Invalid request body", http.StatusBadRequest)
			return
		}

		// 受け取ったデータをログに出力
		fmt.Printf("Received form data: %+v\n", formData)

		// 成功レスポンスを返す
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{"message": "フォームデータが送信されました！"})
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}
