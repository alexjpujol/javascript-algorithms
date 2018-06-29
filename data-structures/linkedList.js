//a list of nodes that have a reference to the next node in the list
//store a reference to the head and tail as well.

//getting data from a linked list is expensive. O(n) time complexity

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    pop() {
        return this.delete(this.length - 1);
    }

    _find(value, test=this._test) {
        //uses test method
        let current = this.head;
        let i = 0;
        while (current) {
            if (test(value, current.value, i, current)) {
                return current
            }
            current = current.next;
            i++;
        }
        return null;
    }

    _test(a,b) {
        return a === b;
    }
    
    get(index) {
        const node = this._find(index, this._testIndex);
        if (!node) return null;
        return node.value;
    }

    delete(index) {
        //special handling if we're deleting the head
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = this.next;
            } else {
                this.head = this.tail = null;
            }
            this.length--;
            return head.value;
        }

        const node = this._find(index - 1, this._testIndex);
        const excise = node.next;
        if (!excise) return null;
        //take the node you're deleting and make it's next value the previous node's next value
        node.next = excise.next;
        if (node.next && !node.next.next) this.tail = node.next;
        this.length--;
        return excise.value;
    }

    _testIndex(search, __, i) {
        return search === i;
    }
}

const list1 = new LinkedList();
list1.push(20);
console.log(list1);