package main

import (
  "encoding/csv"
  "fmt"
  "os"
)

func main() {
  file, err := os.Open("../out.csv")

  if err != nil {
    fmt.Println("Error:", err)
    return
  }

  reader := csv.NewReader(file)

  lines, err := reader.ReadAll()

  if err != nil {
    fmt.Println("Error:", err)
    return
  }

  fmt.Println(len(lines), " rows")

  file.Close();
}