class Queue{
    constructor(){
        this.mylist = [];

    }
    isEmpty(){
        return this.mylist.length == 0;
    }
    enQueue(value){
        this.mylist.push(value)
    }
    deQueue(){
       if(this.isEmpty()){
        return " "
       }
       else {
        return this.mylist.shift();
       }
    }
    getSize(){
        return this.mylist.length;
    }
    display(){
        for(let i = 0;i < this.mylist.length;i++){
            console.log(this.mylist[i])
        }
    }
}

let myQeue = new Queue


