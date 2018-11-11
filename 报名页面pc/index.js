var button = document.getElementsByClassName("button")[0];
var cardown= document.getElementsByClassName("cardown")[0];
var left= document.getElementsByClassName("left")[0];
var right= document.getElementsByClassName("right")[0];
var glass= document.getElementsByClassName("glass")[0];

button.addEventListener("click",function(){
    cardown.classList.add("newcardown");
    left.style.filter="blur(10px)";
    right.style.filter="blur(30px)";
    var newcardown= document.getElementsByClassName("newcardown")[0];
    newcardown.style.display="block";
    var input = document.getElementsByTagName("input");
    var card3= document.getElementsByClassName("card3")[0];
    for(var i=0;i<4;i++){
        var div=document.createElement("div");
        div.setAttribute("class","message");
        newcardown.appendChild(div);
        div.innerHTML=card3.children[2*i+1].innerHTML+" : "+input[i].value;
    }
    var div=document.createElement("div");
    div.setAttribute("class","back");
    newcardown.appendChild(div);
    div.innerHTML="返回";
    var div=document.createElement("div");
    div.setAttribute("class","confirm");
    newcardown.appendChild(div);
    div.innerHTML="确定";
    var confirm=document.getElementsByClassName("confirm")[0];
    var back=document.getElementsByClassName("back")[0];
    back.addEventListener("click",function(){
        while(glass.children[1]){
            glass.removeChild(glass.children[1]);
        }newcardown.style.display="none";
        left.style.filter="blur(0)";
        right.style.filter="blur(0)";
        
    })
    confirm.addEventListener("click",function(){
        while(glass.children[1]){
            glass.removeChild(glass.children[1]);
        }
        newcardown.style.display="none";
        for(var i=0;i<4;i++){
            input.value="";
        }
        left.style.filter="blur(0)";
        right.style.filter="blur(0)";
    })
  
})

