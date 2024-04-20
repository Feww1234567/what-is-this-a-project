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

const search = () =>{
    const searchBox = document.getElementById("search-pro").value.toUpperCase();
    const Item = document.getElementById("product-list");
    const product = document.querySelector(".product");
    const pname = document.getElementsByTagName("h2");
    
    for(var i=0; i< pname.length;i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            match.textContant || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}