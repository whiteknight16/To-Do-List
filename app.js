const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine","ejs");

let datas=["Buy Food","Cook Food","Eat Food"];
let items=[];
app.get("/",function(req,res){
    let day=date.getDate();  
    res.render("lists",{listTitle:day,newListItem:datas});
})

app.post("/",function(req,res){
    data=req.body.data;
    datas.push(data);
    res.redirect("/")

})

app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3000,function(){
    console.log("Server is up and running");
})