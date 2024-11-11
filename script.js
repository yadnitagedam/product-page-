
let productImg = document.getElementById("ProductImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "images/smImg1.jpg";

    for(btn of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    productImg.src = "images/smImg1copy.jpg";

    for(btn of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    productImg.src = "images/smImg1copy2.jpg";
    

    for(btn of btn){
        btn.classList.remove("active");
    }
    this.classList.add("active");
}