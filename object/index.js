/* 
- Unordered collection of key-value pair
- Key must be string/symbol data type 
- Value can be any data type
- Access : using dot or bracket
- Object can not be iterated using for .. of loop
*/ 

const obj = {
    name : 'Nikhil', 
    age : 25, 
    sayMyName: function(){
        console.log(this.name)
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj['age']);

// add using dot notation 
obj.hobby = 'Coding'

// delete using 'delete' keyword and dot notation
delete obj.hobby
console.log(obj);
obj.sayMyName()

// Object Keys - Returns array of keys of object
const keys = Object.keys(obj)
console.log(keys);

// Object Values - Returns array of values of the object
const values = Object.values(obj)
console.log(values)

// Object Entries - Returns array of key value pairs
const entries = Object.entries(obj)
console.log(entries);

/* 
Time Complexity

- Insert / Remove / Access - O(1)
- Search - O(n)
- Keys / Values / Entries - O(n)

*/ 

