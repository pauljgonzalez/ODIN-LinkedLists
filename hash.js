class HashMap {
    constructor(){
        this.capacity = 16
        this.buckets = Array(this.capacity)
        this.keyLength = 0
    }
    
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = ((primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length) ;
        }
        return hashCode;
      } 

    set(key,value){
        const index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
        if(this.buckets[index] === undefined){
            this.buckets[index] = new Node(key,value)
            this.keyLength ++;
            return "New Item Added to index " + index
        }
        // dont think i have to check if as it either is undefined or has a value
        if(this.buckets[index] !== undefined){
            if(this.buckets[index].key !== key){return "Keys are not the same need linked list"}
            if(this.buckets[index].key === key){
                this.buckets[index].value = value
                return "Updated value in index " + index
            }
        }
    }
    get(key){
        const index = this.hash(key)
        if(this.buckets[index] === undefined){return key + " not in index"} 
        if(this.buckets[index].key !== key){return "Different Key (" +this.buckets[index].key+ ") at index"}
        return this.buckets[index].value
    }
    has(key){
        const index = this.hash(key)
        if(this.buckets[index] === undefined){return false}
        if(this.buckets[index].key === key)
            {return true}
            else{return false}
    }
    remove(key){
        const index = this.hash(key)
        if(this.has(key) === false){return "Key not found"}
        if(this.has(key) === true){
            delete this.buckets[index]
            this.keyLength --
            return "value removed"
        }
    }
    length(){
        return "There are " + this.keyLength + " keys in the hash map"
    }
    clear(){
        this.buckets = []
        this.capacity = 16
        this.entries = 0
        return "Hash Map Cleared Of All Data"
    }
    keys(){
        const array = []
        this.buckets.forEach((node) =>{
            array.unshift(node.key)
        })
        return array
    }
    values(){
        const array = []
        this.buckets.forEach((node) =>{
            array.unshift(node.value)
        })
        return array
    }
    entries(){
        const array = []
        this.buckets.forEach((node) =>{
            array.unshift([node.key,node.value])
        })
        return array
    }
}

class Node {
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

const hash = new HashMap

console.log(hash.hash("testt"))
console.log(hash.set("Test One","This is from test One"))
console.log(hash.set("Test Two","This is from test Two"))
console.log(hash.set("Test Three","This is from test Three"))

console.log(hash.remove("Test One"))
console.log(hash.remove("Test Two"))
console.log(hash.remove("Test Three"))
console.log(hash.length())
console.log(hash.entries())
