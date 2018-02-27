package main

import (
	"fmt"
	"math"
)

func lengthOfLongestSubstring(s string) int {
	start := 0
	maxLength := 0
	usedChar := make(map[rune]int)

	for i, value := range s {
		v, ok = usedChar[value]
		if ok {
			start = v + 1
		} else {
			if maxLength < i-start +1 {
				maxLength = i - start +1
			}
		}
		usedChar[value] = i
	}
	return maxLength
}

func main() {

}

