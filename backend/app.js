const express = require("express")
const bodyParser=require("body-parser")
const cors =require("cors")

const sendgrid =require("@sendgrid/mail")

const app =express();;

app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
})