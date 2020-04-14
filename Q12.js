
class Queue{
    constructor(){
        this.array = [];
    }

    add(data){
        this.array.push(data);
    }

    poll(){
        if(this.array.length ==0){
            return;
        }
        this.array.shift();
    }

    isEmpty(){
        return this.array.length ===0;
    }

    peek(){
        if(this.isEmpty){
            return;
        }
        return this.array[0];   
    }

     getSize(){
        return this.array.length;
     }
}

let q = new Queue();

q.add(4);//add 4
q.getSize(); //1
q.peek(); // return 4
q.poll();//return 4;