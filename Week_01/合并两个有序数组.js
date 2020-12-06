/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n, l) {
  ;(l = m + n), m--, n--
  while (l--) {
    nums1[l] =
      (nums2[n] === undefined ? -Infinity : nums2[n]) >=
      (nums1[m] === undefined ? -Infinity : nums1[m])
        ? nums2[n--]
        : nums1[m--]
  }
}
// @lc code=end
