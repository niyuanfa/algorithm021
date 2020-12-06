/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.65%)
 * Likes:    589
 * Dislikes: 0
 * Total Accepted:    226.9K
 * Total Submissions: 497.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = [0]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] != 0) {
      return digits
    }
  }
  digits = [...Array(len + 1)].map((_) => 0)
  digits[0] = 1
  return digits
}
// 解决思路
// 1. 暴力法，将通过循环将数组转化成非负整数，进行加一，再将整数转成字符串再转成数组(js整数最大值)失败
// 2. 将数组最后一位+1,如果向前进位(即10取余==0)，如果结果不是0，就是进位结果，如果全是9的情况
// 数组需要多加一条，首位是1，其他都是0
// @lc code=end
