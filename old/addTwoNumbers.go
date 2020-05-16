package main

import "fmt"


type ListNode struct {
	Val int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	newHead := ListNode{-1, nil}
	cur := &newHead
	carry := 0
	for l1 != nil || l2 !=nil {
		value := carry
		if l1 != nil {
			value += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			value += l2.Val
			l2 = l2.Next
		}
		if value > 10 {
			carry = 1
			value = value % 10
		} else {
			carry = 0
		}
		cur.Next = &ListNode{value, nil}
		cur = cur.Next
	}

	if carry == 1 {
		cur.Next = &ListNode{carry, nil}
	}
	return newHead.Next
}

func main() {
	a := ListNode{0, nil}
	//a.Next = &ListNode{4, nil}
	//a.Next.Next = &ListNode{3, nil}

	b := ListNode{0, nil}
	//b.Next = &ListNode{6, nil}
	//b.Next.Next = &ListNode{4, nil}

	c := addTwoNumbers(&a, &b)
	for c != nil {
		fmt.Println(c.Val)
		c = c.Next
	}
}
