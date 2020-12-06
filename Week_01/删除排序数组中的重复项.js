/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0
  for (let y = 0; y < nums.length; y++) {
    if (nums[y] != nums[k]) {
      k++
      nums[k] = nums[y]
    }
  }
  return k + 1
}
// @lc code=end
