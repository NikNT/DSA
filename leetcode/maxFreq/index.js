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
function maxFrequencyElements(nums) {
    var e_1, _a, e_2, _b, e_3, _c;
    var freqMap = new Map();
    try {
        for (var nums_1 = __values(nums), nums_1_1 = nums_1.next(); !nums_1_1.done; nums_1_1 = nums_1.next()) {
            var num = nums_1_1.value;
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nums_1_1 && !nums_1_1.done && (_a = nums_1.return)) _a.call(nums_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var maxFreq = 0;
    try {
        for (var _d = __values(freqMap.values()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var freq = _e.value;
            maxFreq = Math.max(maxFreq, freq);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var count = 0;
    try {
        for (var _f = __values(freqMap.values()), _g = _f.next(); !_g.done; _g = _f.next()) {
            var freq = _g.value;
            if (freq === maxFreq) {
                count++;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return maxFreq * count;
}
var nums = [1, 4, 4, 4, 5, 5, 6, 6, 6];
console.log(maxFrequencyElements(nums));
