var inorderTraversal = function (root) {
  let res = []
  let inorder = function (root) {
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
