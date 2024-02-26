class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

const p: TreeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q: TreeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(p, q));
