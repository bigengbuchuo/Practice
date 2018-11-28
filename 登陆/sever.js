const http=require("http");
const fs=require("fs");
const querystring=require("querystring");

var abj={};
const sever=http.createServer(function(request,response){
    var url=request.url;
    var str="";
    var obj={};
    request.on("data",function(data){
        str+=data;
    })
    request.on("end",function(){
        obj=querystring.parse(str);
        if(url=="/signup"){
            response.setHeader("Content-type", "text/plain;charset=utf-8");
            if(abj[obj.name]){
                response.write("该用户名已存在");
            }else{
                abj[obj.name]=obj.pass;
                response.write("注册成功");
            }
            response.end();
        }
        else if(url=="/login"){
            response.setHeader("Content-type", "text/plain;charset=utf-8");
            if(abj[obj.name]){
                if(abj[obj.name]==obj.pass){
                    response.write("登录成功");
                }else{
                    response.write("密码错误");
                }
            }else{
                response.write("该用户名不存在");
            }
            response.end();
        }else if(url=="/index.html"||url=="/index.js"){
            fs.readFile("./www"+url,function(err,data){
                    console.log(err);
                    if(err){
                        response.write(err+"");
                    }else{
                        response.write(data);
                    }
                    response.end();
                })
        }else{
            response.setHeader("Content-type", "text/plain;charset=utf-8");
            response.write("网址错误");
        }  
    })
})
sever.listen(8080);



