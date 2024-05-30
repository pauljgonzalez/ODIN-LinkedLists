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
        if(!this.tail){
            return "No nodes left"
        }else{

            length -=1;
        }
    }
    index(num){
        if(this.length === 0){return "No nodes in list"}
        let node = this.head;
        for(let i = 0; i<num;i++){
            node = node.next
        }
        return node
    }
    containsValue(value){
        let node = this.head
        for(let i = 0; i < this.length; i++){
            if(node.value == value){
                return true;
            }
            node = node.next
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
        let string = "( "
        for(let i = 0; i<this.length;i++){
            if(node.next ===null){
                string += node.value +" ) -> null"
                return string
            }
            string += node.value + " ) -> ( "
            node = node.next
        }
    } 
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList()

linkedList.prepend("53")
linkedList.prepend("2")
linkedList.prepend("62")
linkedList.prepend("214")
linkedList.prepend("12")


// linkedList.append(16)
// linkedList.append(4)

console.log(linkedList.toString())
