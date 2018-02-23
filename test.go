package main
import "fmt"
func main() {
	fmt.Println("Hello")
}

type treeNode struct {
	value int
	left, right * treeNode
}
