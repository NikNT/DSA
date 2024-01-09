/*
    Set : 
    - Contains unique values which can be of different data type. 
    - Dynamically sized  
    - Do not maintain insertion order 
    - Iterables : for..of can be used
*/

const set = new Set([1,2,3])

//add value
set.add(4)

//duplicate value will be ignored
set.add(4)

//to check whether a set has a value 
console.log(set.has(4))

//delete value 
set.delete(3)

//number of items 
console.log('Size: ', set.size)

//clear all values
set.clear()

//access the values
for (const item of set){
    console.log(item)
}

