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
        while(cardown.children[1]){
            cardown.removeChild(cardown.children[1]);
        }
        newcardown.style.display="none";
        left.style.filter="blur(0)";
        right.style.filter="blur(0)";
    })
    confirm.addEventListener("click",function(){
        while(cardown.children[1]){
            cardown.removeChild(cardown.children[1]);
        }
        for(var i=0;i<4;i++){
            input[i].value="";
        }
        newcardown.style.display="none";
        left.style.filter="blur(0)";
        right.style.filter="blur(0)";
        Ajax({
            url: "http://join.xiyoumobile.com/signup/user/add",
            type: "post",
            data: "sid="+card3.children[2]+"&name="+card3.children[4]+"&clazz="+card3.children[6]+"&sex="+card3.children[8],
            async:true,  //是否异步
        });
    })
})

function Ajax(object){
    xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange",function(){
        if(xhr.readyState==4){
            var status=xhr.status;
            if(status>=200&&status<300){
                object.success(xhr.responseText);
            }else{
                object.fail(status);
            }
        }
    })
    var message=transfrom(object.data);
    if(object.type=="get"){
        xhr.open("get",object.url+"?"+message,object.async);
        xhr.send(null);
    }else if(object.type=="post"){
        xhr.open("post",object.url,object.async);
        xhr.setRequestHeader("Authorization","Basic eGl5b3UzZzp4aXlvdTNnZnoxNTUqKi8v");
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(message);
    }
}
function transfrom(data){
    var arr=[];
    for(thing in data){  //用thing来接收data的属性名
        arr.push(encodeURIComponent(thing)+"="+encodeURIComponent(data[thing]));//访问对象的方式
    }
    return arr.join("&");
}

