/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //尾部删除n个，头部添加n个
  //尾部取出n个数据添加到头部
  let len = nums.length
  let spliceArr = nums.splice(len - k)
  nums.splice(0, 0, ...spliceArr)
  // for (let x = 0; x < k; x++) {
  //   nums.unshift(nums.pop())
  // }
}
// @lc code=end
