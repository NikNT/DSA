/*
    Map
    - Ordered collection of key-value pairs : any data type
    - Retrieve using key
    - Iterable : for..of can be used 
*/

/*
    vs Object
    - Ordered vs Unordered 
    - Keys : Any data type vs Symbol/String 
    - Iterable vs Non-Iterable
    - Number of items in map can be determined 
      whereas this need to be manual in object
    - Can attach functionality in objects but maps just store
*/
const map = new Map([['a', 1], ['b', 2]])

//add a value : set is a property and not the data structure
map.set('c', 3)

//check value
console.log(map.has('a'))

//delete value
map.delete('c')

//check size
console.log(map.size)

//clear
map.clear()

for(const [key, value] of map){
    console.log(`${key} : ${value}`)
}

