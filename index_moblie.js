var pause = document.getElementsByClassName("pause")[0];
var reset=document.getElementsByClassName("reset")[0];
var needle=document.getElementsByClassName("needle")[0];

var flag = 1, f = 0;
pause.addEventListener("touchstart", function () {
    var date1 = new Date();
    if (flag) {
        timer=setInterval(function () {
            flag=0;
            var date2 = new Date();
            value = date2 - date1 + f;
            count(value);
            time = document.getElementsByClassName("time")[0];
            show(time);
            needle.style.backgroundImage = "url(./src/img/pic3.png)";
        }, 10);
    } else {
        flag=1;
        f = value;
        clearInterval(timer);
        needle.style.backgroundImage = "url(./src/img/pic2.png)";
    }
})

reset.addEventListener("touchstart",function(){
    if(flag){
       value=0; 
       for(var i=0;i<5;i+=2){
        time.children[i].innerHTML="00";
       }
    }
})

function count(data) {
    var c = Math.floor(data % 1000 / 10);
    var b = Math.floor(data / 1000 % 60);
    var a = Math.floor(data / 1000 / 60 % 60);
    digit = new Array();
    digit.push(a, b, c);
    for (var i = 0; i < 3; i++) {
        digit[i] = (digit[i] < 10) ? ("0" + digit[i]) : (digit[i]);
    }
}

function show(location) {  //传到哪
    for (var i = 0; i < 5; i += 2) {
        location.children[i].innerHTML = digit[i / 2];
    }
}