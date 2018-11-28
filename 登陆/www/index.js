var login=document.getElementById("login");
var signup=document.getElementById("signup");
var user=document.getElementsByClassName("us")[0];
var pass=document.getElementsByClassName("pa")[0];

login.onclick=function(){
    xhr=new XMLHttpRequest();
    xhr.open("post","http://localhost:8080/login",true);
    xhr.send("name="+user.value+"&"+"pass="+pass.value);
}
signup.onclick=function(){
    xhr=new XMLHttpRequest();
    xhr.open("post","http://localhost:8080/signup",true);
    xhr.send("name="+user.value+"&"+"pass="+pass.value);
}

