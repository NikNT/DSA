const arr = [-5, 2, 10, 4, 6];
const element = 2;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, element));

//Big-O = O(n);
