var isEmpty = function (obj) {
    if (typeof obj === "object") {
        return Object.keys(obj).length <= 0;
    }
    else {
        return obj.length < 0;
    }
};
var obj = { x: 5, y: 42 };
var obj2 = {};
var arr = [];
var arr2 = [1, 2, null];
console.log(isEmpty(obj), isEmpty(obj2), isEmpty(arr), isEmpty(arr2));
