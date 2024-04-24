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

function on(productName) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup-title").innerText = "จองสินค้าสำเร็จ";
    document.getElementById("popup-message").innerText = "ขอบคุณที่จองสินค้า " + productName + " เราจะทำการเนินการให้เร็วที่สุด";
}

function off1() {
    document.getElementById("overlay").style.display = "none";
    myQeue.enQueue("Iphone 15 Pro Max")
    displaydata()
}
function off2() {
    document.getElementById("overlay").style.display = "none";
    myQeue.enQueue("Samsung Galaxy S24 Ultra")
    displaydata()
}

function off3() {
    document.getElementById("overlay").style.display = "none";
    myQeue.enQueue("Xiaomi Mi 11 Ultra")
    displaydata()
}



function displaydata(){
    console.log(myQeue)
}