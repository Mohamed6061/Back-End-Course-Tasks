package main

import (
    "fmt"
    "strings"
)
func main() {
    result := valueFunc("Hello I am mohamed , moHamed  student , Hello , I")
    fmt.Println(result)
}

func valueFunc(txt string) map[string]int {
    arr := strings.Split(txt, " ")
    obj := make(map[string]int)

    for i := 0; i < len(arr); i++ {
        num := 0
        for j := 0; j < len(arr); j++ {
            if strings.EqualFold(arr[i], arr[j]) {
                num += 1
            }
        }
        obj[strings.ToLower(arr[i])] = num
    }
    return obj
}

// using Javascript

// function value_func(txt) {
//     arr = txt.split(" ")
//     let obj = {}
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i].toLowerCase() == arr[j].toLowerCase()) {
//                 num += 1;
//             }
//         }
//         obj[arr[i].toLowerCase()] = num;
//         num = 0
//     }
//     return obj
// }

// console.log(value_func("Hello I am mohamed , moHamed  student , Hello , I"))