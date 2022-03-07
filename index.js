

const express=require("express");
const res = require("express/lib/response");

const app=express();

app.use(checkPermission);

app.use(logger)
app.get("/books",(req,res)=>{
return res.send({route:"/books"})
}),
app.get("/libraries",(req,res)=>{
    return res.send({route:"/libraries",Permission:req.Permission})
}),
app.get("/authors",(req,res)=>{
    return res.send({route:"/authors",Permission:req.Permission})
})


function logger(req,res,next){
    console.log("start")

    next();
    console.log("end");
}

function checkPermission(req,res,next){


    if(req.path==="/libraries"){
        req.Permission=true
    }
    else if(req.path==="/authors"){
        req.Permission=true;
    }
    next();
}

app.listen(3500,()=>{
    console.log("listening at port 3500");
})