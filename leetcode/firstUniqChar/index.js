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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function firstUniqChar(s) {
    var e_1, _a;
    var charCount = new Map();
    var charIndex = new Map();
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
        charIndex.set(char, i);
    }
    var minIndex = Infinity;
    try {
        for (var charCount_1 = __values(charCount), charCount_1_1 = charCount_1.next(); !charCount_1_1.done; charCount_1_1 = charCount_1.next()) {
            var _b = __read(charCount_1_1.value, 2), char = _b[0], count = _b[1];
            if (count === 1 && charIndex.get(char) < minIndex) {
                minIndex = charIndex.get(char);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (charCount_1_1 && !charCount_1_1.done && (_a = charCount_1.return)) _a.call(charCount_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (minIndex === Infinity) {
        return -1;
    }
    else {
        return minIndex;
    }
}
var s = "leetcode";
console.log(firstUniqChar(s));
