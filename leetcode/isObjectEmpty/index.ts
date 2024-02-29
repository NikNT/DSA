const isEmpty = function (obj) {
  if (typeof obj === "object") {
    return Object.keys(obj).length <= 0;
  } else {
    return obj.length < 0;
  }
};

const obj = { x: 5, y: 42 };
const obj2 = {};
const arr = [];
const arr2 = [1, 2, null];
console.log(isEmpty(obj), isEmpty(obj2), isEmpty(arr), isEmpty(arr2));
