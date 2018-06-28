//implementation of an arrayList

class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        let temp = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return temp;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        let answer =  this.data[index];
        this._collapseTo(index);
        return answer;
    }

    _collapseTo(index) {
        //shift everything down 1 from where the index is. DELETE IS EXPENSIVE
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arrList1 = new ArrayList();
console.log(arrList1.push("hello"));
console.log(arrList1.push("i like turtles"));
console.log(arrList1.delete(0));
console.log(arrList1.data)