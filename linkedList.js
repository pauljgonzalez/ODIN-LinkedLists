class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get size(){
        return this.length;
    }
    get headNode(){
        return this.head;
    }
    get tailNode(){
        return this.tail;
    }
    append(value){
       const node = new Node(value);
       if(!this.tail){
            this.head = node;
            this.tail = node;
       }else{
            this.tail.next = node;
            this.tail = node;
       }
        this.length +=1;
    }
    prepend(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length +=1;
    }
    pop(){
        if(!this.tail){return "No nodes left"};
        if(this.length ===1){
            this.head = null;
            this.tail = null
            this.length -=1;
            return "Last node removed"
        }
        let current = this.head;
        let newTail = current;
        for(let i = 1; i<this.length; i++){
            newTail = current;
            // console.log(newTail)
            current = current.next;
            // console.log(current);
        }
        console.log(newTail)
        newTail.next = null;
        this.tail = newTail;
        this.length -=1;
        }
    index(num){
        if(this.length === 0 || num > this.length || num < 0){return "Index out of bounds."}
        let node = this.head;
        for(let i = 0; i<num;i++){
            node = node.next;
        }
        return node;
    }
    containsValue(value){
        let node = this.head
        for(let i = 0; i < this.length; i++){
            if(node.value == value){
                return true;
            }
            node = node.next;
        }
        return false
    }
    findValue(value){
        let node = this.head
        for(let i = 0; i < this.length; i++){
            if(node.value == value){
                return "Value found at index " + i;
            }
            node = node.next
        }
        return "Value not found"

    }
    toString(){
        let node = this.head
        let string = ""
        while (node) {
            string += `( ${node.value} ) -> `;
            node = node.next;
        }
        return string + "null";
    } 
    insertAt(value,index){
        if (this.index(index) === "Index out of bounds."){
            return "Index out of bounds."
        }
        if(index === 1){
           this.prepend(value)
            return "Node Addedd to start of list"
        }
        if(index === this.length){
            let nodeBefore
            let current = this.head
            const newNode = new Node(value)
            newNode.next = this.tail
            for(let i = 1; i<index; i++){
                nodeBefore = current
                current = current.next
                
            }
            nodeBefore.next = newNode
            this.length ++;
            return "Node Added"
        }
            let nodeBefore
            const newNode = new Node(value)
            let current = this.head
            for(let i = 1; i<index; i++){
                nodeBefore = current
                current = current.next  
            }
            nodeBefore.next = newNode
            newNode.next = current
            this.length ++;
            
    }
    removeAt(index){
        if (this.index(index) === "Index out of bounds."){
            return "Index out of bounds."
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return "No nodes remain"
        }
        if(index === this.length){
            this.pop();
            return "index " +index + " removed"
        }
            let nodeBefore
            let nodeAfter
            let current = this.head
            for(let i = 1; i<index; i++){
                nodeBefore = current
                current = current.next  
                nodeAfter = current.next
            }
            nodeBefore.next = nodeAfter
            this.length --;
        
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList()

// linkedList.prepend("2414")
// linkedList.prepend("1245")
linkedList.prepend("123")
linkedList.prepend("85")
linkedList.prepend("53")
linkedList.prepend("2")




// linkedList.append(16)
// linkedList.append(4)

console.log(linkedList.insertAt(0.5,3))
console.log(linkedList.toString())
