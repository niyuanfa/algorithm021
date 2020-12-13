var postorder = function (root) {
  let res = []
  let dfs = function (node) {
    if (!node) return
    for (let x = 0; x < node.children.length; x++) {
      dfs(node.children[x])
    }
    res.push(node.val)
  }
  dfs(root)
  return res
}
