class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        this.node
    }
}

class Tree {
    constructor(array){
       this.originalArray = array
       this.sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b)
    }
    buildTree(arr,start,end){

        if(start>end){
            return null
        }
        let mid = Math.floor((start + end)/2)
        // console.log(mid)
        let node = new Node (arr[mid])
        node.left = this.buildTree(arr,start,mid-1)
        node.right = this.buildTree(arr,mid+1, end)
        this.node = node
        return node
    }
    insert(value){}
    deleteItem(value){}
    
    find(value,rootNode){
        let result = true
        let node = rootNode
        while(result = true){
           if(value === node.data){return node}
           if(value < node.data){
            if(node.left === null){return "Value not in tree"}
                node = node.left
           }
           if(value>node.data){
            if(node.right === null){return "Value not in tree"}
                node = node.right
           }
        }
    }
}

const testArray = [1, 9, 11, 13, 17, 18, 19, 24, 25, 28, 30, 34, 48, 57, 58, 59, 62, 64, 69, 72, 77, 80, 82, 83, 87, 91, 93, 95, 96, 99]
const searchTree = new Tree(testArray)
const array = searchTree.sortedUniqueArray
console.log(array)
const start = 0
const end = array.length - 1
const builtTree = searchTree.buildTree(array,start,end)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(builtTree)
const search = searchTree.find("Test",searchTree.node)
console.log(search)
