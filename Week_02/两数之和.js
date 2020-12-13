var twoSum = function (nums, target) {
  let originMap = new Map()
  for (let x = 0; x < nums.length; x++) {
    originMap.set(target - nums[x], x)
    let sNum = nums[x + 1]
    if (originMap.has(sNum)) {
      return [originMap.get(sNum), x + 1]
    }
  }
}
