package main

import "fmt"

func isPalindrome(x int) bool {
	source := x
	result := 0
	for ;x>0; {
		temp := x % 10
		result = result * 10 + temp
		x /= 10
	}
	fmt.Println(result)
	if result == source {
		return true
	}
	return false
}

func main() {
	fmt.Println(isPalindrome(1))
}