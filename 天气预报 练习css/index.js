var rpic1=document.getElementsByClassName("rpic1")[0];
var rpic2=document.getElementsByClassName("rpic2")[0];
var boxch=document.getElementsByClassName("boxch")[0];

var x=0;
rpic2.onclick=function(){
    if(x==0){
        y=-449;
        move(x,y); 
    }
} 
rpic1.onclick=function(){
    console.log("a");
    if(y==-449){
        console.log("b");
        x=-449;
        y=2;
        move(x,y);
        x=0;
    }
} 
function move(x,y){
    step=(y-x)/10;
    timer=setInterval(function(){
        boxch.style.left=parseInt(boxch.style.left)+step+"px";
        if(Math.abs(y-parseInt(boxch.style.left))<Math.abs(step)){
            boxch.style.left=y+"px";
            clearInterval(timer);
        }
    },100);
}