class Stack 
{
    constructor() 
    {
        this.items = []
        this.count = 0
    }
    push(element) 
    {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
    pop() 
    {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    peek()
    {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }
    isEmpty() 
    {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }
    size()
    {
        console.log(`${this.count} elements in stack`)
        return this.count
    }
    print() 
    {
        let str = ''
        for(let i = 0; i < this.count; i++) 
        {
            str += this.items[i] + ' '
        }
        return str
    }
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()
stack.push(10)
stack.push(30)
stack.peek()
stack.push(50)
console.log(stack.print())
stack.pop()
stack.clear()
stack.size()
stack.isEmpty()