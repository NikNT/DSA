/*
    Queue 
        - Sequential collection : FIFO 
        - End : Rear | Tail 
        - Start : Front | Head
        - Abstract Data Type - Defined by behavior
        - Enqueue (add) | Dequeue (remove)

    Usage 
        - To process in orderly fashion : Printer 
        - CPU Task Schedule
        - Callback queue in JavaScript runtime 
*/

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()

        //removes first item, changes original array, and returns shifted element
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length; 
    }

    print(){
        console.log(this.items.toString())
    }

}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size())
queue.print()

console.log(queue.dequeue())
queue.print()

console.log(queue.peek())



