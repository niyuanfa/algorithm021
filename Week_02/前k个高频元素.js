/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map()
  for (let x of nums) {
    if (map.has(x)) {
      let count = map.get(x) + 1
      map.set(x, count)
    } else {
      map.set(x, 1)
    }
  }
  let arr = []
  for (let [key, value] of map) {
    arr.push({
      key,
      value,
    })
  }
  arr.sort((a, b) => {
    return b.value - a.value
  })
  return arr.slice(0, k).map((item) => item.key)
}
