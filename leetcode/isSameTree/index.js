var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (val === void 0) { val = 0; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var isSameTree = function (p, q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    return (p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right));
};
var p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q));
