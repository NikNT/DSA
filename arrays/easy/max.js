// Max Element 
// Write a function that finds and returns the maximum element in an array.

const arr = [1,2,3,4,5]

function max(arr){
   // Approach #1 
   // return arr.sort((a,b) => a-b)[arr.length-1]

   // Approach #2 
   let maxElement = arr[0]
   for(let i=0; i<arr.length-1; i++){
    if(arr[i+1] > maxElement){
        maxElement = arr[i+1]
    }
   }
   return maxElement;
}

console.log(max(arr));