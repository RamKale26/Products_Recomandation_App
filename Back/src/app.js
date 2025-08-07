let express=require("express");
let bodyParser=require("body-parser");
let db=require("../db");
let router=require("./route/UserRoute.js");
let prodrouter=require("../src/route/ProdRoute.js")
let CategoryController=require("../src/route/CategoryRoute.js");

require("dotenv").config()

let app=express();
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extends:true}))
app.set("view Engine","ejs")

app.use("/",router)
app.use("/",prodrouter);
app.use("/",CategoryController);
module.exports=app;
