const arr = [1,2,3, 'Nikhil', 4, 5]

// adds to the last of array
arr.push(4);

// adds to the first of array
arr.unshift(0)

//removes from the end of array
arr.pop()

//remove from the start of array
arr.shift()

for(const item of arr){
    console.log(item);
}

//returns a shallow copy of a portion of array from index 1 to index (4-1)
const slicedAray = arr.slice(1,4)
console.log('Sliced Array', slicedAray)

//returns a new array by removing or replacing elements : remove 3 elements from index 1 and add 6, 7
const splicedArray = arr.splice(1,3,6,7)
console.log('Spliced Array', splicedArray)
console.log(arr)


/*

Time Complexity 

- Insert/remove from end - O(1)
- Insert/remove from begin - O(1)
- Access - O(1) [all elements have a specific index]
- Search - O(n) [the length of the array will determine the time required for searching elements]
- Push/pop - O(1)
- Shift/unfshift/concat/slice/splice - O(n)
- forEach/map/filter/reduce - O(n)

*/
