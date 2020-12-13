var preorderTraversal = function (root) {
  let res = []
  let preorder = function (root) {
    res.push(root.val)
    preorder(root.right)
    preorder(root.right)
  }
  preorder(root)
  return res
}
