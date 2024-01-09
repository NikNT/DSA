/*
    Stack 
    - Sequential data structure : LIFO 
    - Abstract data type : defined by behavior rather than math model
    - Supported operations : Push | Pop

    Application 
    - Browser history tracking 
    - Undo operation when typing 
    - Expression conversion 
    - Call stack in JavaScript runtime
*/

// Functional 
function createStack(){
    const items = [];

    function push(element){
        items.push(element);
    }

    function pop(element){
        if(isEmpty()){
            console.log('Underflow')
        }
        return items.pop()
    }

    function peek(){
        if(isEmpty()){
            console.log('Stack is Empty')
        }
        return items[items.length - 1];
    }

    function isEmpty(){
        return items.length === 0;
    }

    function size(){
        return items.length;
    }

    return {push, pop, peek, isEmpty, size, items}
}

//Usage 
const myStack = createStack()

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack: ", myStack.items);
console.log("Pop: ", myStack.pop());
console.log("Stack: ", myStack.items);
console.log("Peek: ", myStack.peek());
console.log("Size:",myStack.size())

//Class-based

class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack Empty')
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack Empty")
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }
}

const myStack2 = new Stack()
myStack2.push('A')
myStack2.push('B')
myStack2.push('C')

console.log("Stack 2: ", myStack2.items)
console.log("Stack 2 Pop: ", myStack2.pop());
console.log("Stack 2 Peek: ", myStack2.peek())
console.log("Stack 2 Size: ", myStack2.size())