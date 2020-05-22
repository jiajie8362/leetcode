// 第一题
//
// 第二题
//
// 第三题
// 剩余答题时间
//
// 隐藏时间
//
// 结束面试
// 题目描述
// 提交记录
// 公司共有 n 个项目和  m 个小组，每个项目要不没有归属，要不就由其中的一个小组负责。
//
// 我们用 group[i] 代表第 i 个项目所属的小组，如果这个项目目前无人接手，那么 group[i] 就等于 -1。（项目和小组都是从零开始编号的）
//
// 请你帮忙按要求安排这些项目的进度，并返回排序后的项目列表：
//
// 同一小组的项目，排序后在列表中彼此相邻。
// 项目之间存在一定的依赖关系，我们用一个列表 beforeItems 来表示，其中 beforeItems[i] 表示在进行第 i 个项目前（位于第 i 个项目左侧）应该完成的所有项目。
// 结果要求：
//
// 如果存在多个解决方案，只需要返回其中任意一个即可。
//
// 如果没有合适的解决方案，就请返回一个 空列表。
//
//
//
// 示例 1：
//
//
//
// 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
// 输出：[6,3,4,1,5,2,0,7]
// 示例 2：
//
// 输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
// 输出：[]
// 解释：与示例 1 大致相同，但是在排序后的列表中，4 必须放在 6 的前面。
//
//
// 提示：
//
// 1 <= m <= n <= 3*10^4
// group.length == beforeItems.length == n
// -1 <= group[i] <= m-1
// 0 <= beforeItems[i].length <= n-1
// 0 <= beforeItems[i][j] <= n-1
// i != beforeItems[i][j]
//
// 切换为
// 英文
// logo字节跳动
//
// 上一题
// 2/3
//
// 下一题
//
// 智能模式
//
//
//
// 12
// class Solution:
// def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
// 控制台
// 在线模拟面试
//
// 模拟面试规则
//
// 每场面试包含 1 ～ 3 道题
// 根据题目数量每场面试有 30 到 90 分钟的做题时间
// 题目完成后需点击 "结束面试” 结束本场面试
// 面试成绩可在模拟记录中查看
//
// 取消
//
// 开始模拟面试
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {

};