// Q10 implement a LinkedList in JS.

class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    printList(){
        let str = "";
        let temp = this.head;
        while(temp!=null){
            str += temp.data + " ";
            temp = temp.next;
        }
        console.log(str);
    }

    insertNode(data){
        let node = new LinkedListNode(data);
        if(this.head ==null){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++;
    }

    removeNode(index){
        if(index <0 || index >this.size){
            return null;
        }
        if(index ===0){
            this.head = this.head.next;
        }
        else{
            let temp = this.head;
            let num =0;
            while(num!=index){
                temp = temp.next;
                num++;
            }
            temp.next = temp.next.next;
        }
    }
 }

 let ll = new LinkedList();

 ll.insertNode(1);
 ll.insertNode(4);
 ll.printList();
 ll.removeNode(1);
 ll.getSize();
 ll.isEmpty();
