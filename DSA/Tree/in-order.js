class node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
let root = new node(10);
root.left = new node(20);
root.right = new node(30);
root.right.left = new node(40)
root.right.right = new node(60);
console.log(root)
const inOrder = (root)=>{
    if(root!=null){
        inOrder(root.left)
        console.log(root.key);
        inOrder(root.right)
    }
}
inOrder(root);
