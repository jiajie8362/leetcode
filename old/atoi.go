package main

import "fmt"

func myAtoi(str string) int {
	if len(str) == 0 {
		return 0
	}
	isNegative := false
	index := 0
	cur := str[index]
	result := 0
	for i:=index;i<len(str); {
		if str[i] == ' ' {
			i++
			index++
		} else {
			break
		}
	}
	cur = str[index]

	if cur == '-' {
		isNegative = true
		index++
	} else if cur == '+' {
		index++
	}
	for i := index; i < len(str); {
		if str[i] <= '9' && str[i] >= '0' {
			result = result * 10 + int(str[i]-'0')
			i++
			if result > 2147483648/10 {
				result = 2147483647
				break
			}
			continue
		} else {
			break
		}
	}
	if isNegative {
		if ( result == 2147483647) {
			result = 2147483648
		}
		return -result
	}
	return result
}

func main() {
	fmt.Println(myAtoi("-2147483647"))
}
