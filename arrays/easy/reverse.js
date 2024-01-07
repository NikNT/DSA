// Reverse an Array
// Implement a function that reverses the elements of an array in-place (without creating a new array).

const arr = [1,2,3,4,5]

function reverse(arr){
    // Two pointer approach
    let start = 0;
    let end = arr.length - 1;

    // Swap the array elements
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]

        start++;
        end--;
    }
}

reverse(arr)
console.log(arr);