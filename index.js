var btn=document.getElementsByClassName("middle")[0];
var time=document.getElementsByClassName("top")[0];
var left=document.getElementsByClassName("left")[0];
var right=document.getElementsByClassName("right")[0];
var wrapper=document.getElementsByClassName("wrapper")[0];

var haomiao=document.getElementsByClassName("haomiao")[0];
var miao=document.getElementsByClassName("miao")[0];
var minute=document.getElementsByClassName("minute")[0];
var hour=document.getElementsByClassName("hour")[0];
var minutespot=document.getElementsByClassName("minutespot")[0];
var hourspot=document.getElementsByClassName("hourspot")[0];


var count=1;
k=0;
var flag;
btn.onclick=function(){
    if(flag){
        flag=0;
        sum=0;
        k=0;
    }
    if(count){//count=1,sanjiao
        btn.style.backgroundPosition="52% 147%";
        left.style.backgroundImage="url(./src/img/back2.png)";
        right.style.backgroundImage="url(./src/img/time.png)";
        count=0;
        var date1=new Date();
        var date2=new Date();
        timer=setInterval(function(){
            var date = new Date();
            date2.setTime(date.getTime());
            sum=date2-date1+k;
            judge(sum);
            console.log(timer);
        },10);
    }else{//count=0,shugang
        btn.style.backgroundPosition="60% -43%";
        left.style.backgroundImage="url(./src/img/back.png)";
        right.style.backgroundImage="url(./src/img/time2.png)";
        count=1;
        console.log(timer);
        clearInterval(timer);
        k=sum;
    }
}                                        

function judge(sum) {
    d=Math.floor(sum%1000/10);
    sum=sum-sum%1000;
    sum=sum/1000;
    c=sum%60;
    b=Math.floor(sum/60%60);
    a=Math.floor(sum/3600%3600);
    // console.log(a,b,c,d);
    infor(a,b,c,d);
}

function infor(a,b,c,d) {
    digit=new Array();
    digit.push(a,b,c,d);
    for(i=0;i<4;i++){
        if(digit[i]<10){
            digit[i]="0"+digit[i];
        }else if([i]>=10){
            digit[i]=digit[i];
        }
    }
    if(digit[2]==59){
        minutespot.style.color="black";
        time.children[2].style.color="black";    }
    if(digit[1]==59){
        hourspot.style.color="black";
        time.children[0].style.color="black";
    }
    time.children[0].innerHTML=digit[0];
    time.children[2].innerHTML=digit[1];
    time.children[4].innerHTML=digit[2];
    time.children[6].innerHTML=digit[3];
}

left.onclick=function() {
    rightlist.style.display="none";
    flag=1;
    countnum=0;
    wrapper.setAttribute("class","wrapper");
    areturn();
}

function areturn (){
    time.children[0].innerHTML="00";//需要的是字符串类型
    time.children[2].innerHTML="00";
    time.children[4].innerHTML="00";
    time.children[6].innerHTML="00";
}

var rightlist=document.getElementsByClassName("rightlist")[0];
rightlist.style.display="none";
var countnum=0;
var j=-1;
right.onclick=function() {
    rightlist.style.display="block";
    countnum++;
    j++;
    wrapper.setAttribute("class","newrapper");

    var div=document.createElement("div");  //waibiankuang
    div.setAttribute("class","list");
    rightlist.appendChild(div);

    var list=document.getElementsByClassName("list")[j];
    div=document.createElement("div");
    div.setAttribute("class","num");
    list.appendChild(div);
    
    var div=document.createElement("div");
    div.setAttribute("class","quan");
    list.appendChild(div);
    
    var div=document.createElement("div");
    div.setAttribute("class","duan");
    list.appendChild(div);

    num=document.getElementsByClassName("num")[j];
    // console.log(num[j], j);
    var quan=document.getElementsByClassName("quan")[j];
    var duan=document.getElementsByClassName("duan")[j];

    num.innerHTML=countnum;
    time.style.color="black";
    quan.innerHTML=time.innerHTML;
    duan.innerHTML="abc";
    

}