// Remove duplicates
// Write a function that removes duplicate elements from an array and returns a new array with unique elements.

const arr = [1,2,2,3,4,4,5]

function uniqueArr(arr){
    const uniqueArray = []
    for (const element of arr){
        if(!uniqueArray.includes(element)){
            uniqueArray.push(element)
        }
    }
    return uniqueArray

}

console.log(uniqueArr(arr))