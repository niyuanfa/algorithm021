var preorder = function (root) {
  let res = []
  let dfs = function (node) {
    if (node !== null) {
      res.push(node.val)
      for (let x = 0; x < node.children.length; x++) {
        dfs(node.children[x])
      }
    }
  }
  dfs(root)
  return res
}
