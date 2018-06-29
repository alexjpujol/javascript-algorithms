class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    toObject() {
        return this.root;
    }

    add(value) {
        //if we don't have a root node, create a new root
        if (!this.root) {
            this.root = new Node(value);
            return;
        } 
        //if we do have a root, then check the value to be added relative to the current node's children
        let current = this.root;
        while (true) {
            if (current.value > value) {
                //go left
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(value);
                    break;
                }
            } else {
                //go right
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    break;
                }
            }
        }
    }
}