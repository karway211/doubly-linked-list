const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }
    

    append(data) {
        let newNode = new Node(data);
        if (this.length > 0) {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        } else {
            this._head = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
       return this._head ? this._head.data: null;
    }

    tail() {
        return this._tail ? this._tail.data: null;
    }

    at(index) {
        let currentNode = this._head;
        let counter = 0;
        if (this.length === 0 || index > this.length ){
            return null;
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode.data;
        }
        
    }

    insertAt(index, data) {
        let newNode = new Node(data);
        let currentNode = this._head;
        let counter = 1;

        if (index === 0){
            this._head.prev = newNode;
            newNode.next = this._head;
            this._head = newNode;
        } else {
            while (currentNode !== null) {
                let previous = currentNode;
                currentNode = currentNode.next;
                if(counter === index){
                    newNode.next = currentNode;
                    currentNode.pre = newNode;
                    newNode.pre = previous;
                    previous.next = newNode;
                    this.length++;
                }
                counter++;
            }
        }
        return this;
    }

    isEmpty() {
      return this.length ? false : true;
    }

    clear() {
        while (this.length > 1) {
            this._head = this._head.next;
            this._head.prev = null;
            this.length--;
          }
          if(this.length ===1 ){
            this._head = null;
            this._tail = null;
            this.length = 0;
          }
         return this;
    }

    deleteAt(index) {
		let counter = 1;
        let currentNode = this._head;
  
		while( currentNode !== null ) {
			let previous = currentNode;
			currentNode = currentNode.next;
			if( counter === index ){
                previous.next = currentNode.next;
                previous.prev = currentNode.prev;
			}
			counter++;
        }
        this.length--;
        return this;
     
    }

    reverse() {
        let currentNode = this._head;
        let previous = null;
        while(currentNode){
            let next = currentNode.next;
            currentNode.next = previous;
            currentNode.prev = next;
            previous = currentNode;
            currentNode = next;
        }
        this._tail = this._head;
        this._head = previous;
        return this;
        
    }

    indexOf(data) {
        let currentNode = this._head;
       
        for(let i = 0; i< this.length; i++) {
            if(currentNode.data === data){
                return i;
            } else { 
                currentNode = currentNode.next;
            }
        }
        return -1;  
    }
}

module.exports = LinkedList;
