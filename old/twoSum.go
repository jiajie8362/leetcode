package main

import "fmt"

func twoSum(nums []int, target int) []int {
	if len(nums) <= 0 {
		return nums
	}
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		v, ok := m[target - nums[i]]

		if ok {
			return []int {v, i}
		}
		m[nums[i]] = i
	}
	return []int{}
}

func main() {
	fmt.Println(twoSum([]int {3,2,4}, 6))
}
