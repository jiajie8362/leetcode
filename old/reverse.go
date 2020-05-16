package main

import "fmt"

func reverse(x int) int {
	isNegative := false
	result := 0
	if x < 0 {
		isNegative = true
		x = -x
	}
	for x !=0 {
		result = result * 10 + x % 10
		x /= 10
	}
	if isNegative {
		result = -result
	}
	fmt.Println(result)
	return result
}

func main() {
	fmt.Println(reverse(1534236469))
}