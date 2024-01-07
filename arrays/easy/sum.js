// Sum of array elements 
// Write a function that takes an array of numbers as input and returns the sum of all the elements. 

const arr = [1,2,3,4,5]

function sumOfArray(arr){

    let sum = 0 

    // using for..of loop

    for(const i of arr){
        sum += i
    }

    // using for loop 

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;

}

console.log(sumOfArray(arr))