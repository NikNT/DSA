var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function intersection(nums1, nums2) {
    var e_1, _a;
    var set1 = new Set(nums1);
    var set2 = new Set(nums2);
    var intersection = new Set();
    try {
        for (var set1_1 = __values(set1), set1_1_1 = set1_1.next(); !set1_1_1.done; set1_1_1 = set1_1.next()) {
            var num = set1_1_1.value;
            if (set2.has(num)) {
                intersection.add(num);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (set1_1_1 && !set1_1_1.done && (_a = set1_1.return)) _a.call(set1_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Array.from(intersection);
}
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersection(nums1, nums2));
