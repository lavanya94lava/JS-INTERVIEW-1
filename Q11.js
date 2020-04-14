class Stack{
    constructor(){
        this.array = [];
    }

    //inserts data in stack
    push(data){
        this.array.push(data);
    }

    //removes data from stack
    pop(){
        if(this.array.length ==0){
            return;
        }
        this.array.pop();
    }

    //gives you the top most element
    peek(){
        if(this.array.length ==0){
            return;
        }
        return this.array[this.array.length-1];
    }

    //gives you the size
    getSize(){
        return this.array.length;
    }

    //returns boolean whether stack is empty or not
    isEmpty(){
        return this.array.length ===0;
    }
}


let stack = new Stack();
stack.push(2);//add 2
stack.push(4);//add 4
stack.getSize();// return 2;
stack.isEmpty();//return false;
stack.pop();//return 4