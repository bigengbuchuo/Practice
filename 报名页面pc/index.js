var button = document.getElementsByClassName("button")[0];
var cardown= document.getElementsByClassName("cardown")[0];
var left= document.getElementsByClassName("left")[0];
var right= document.getElementsByClassName("right")[0];

button.addEventListener("click",function(){
    cardown.classList.add("newcardown");
    left.style.filter="blur(30px)";
    right.style.filter="blur(30px)";
    for(var i=0;i<4;i++){
        var div=document.createElement("div");
        div.setAttribute("class","i");
        var newcardown= document.getElementsByClassName("i")[0];
        newcardown.appendChild(i);
    }
})

