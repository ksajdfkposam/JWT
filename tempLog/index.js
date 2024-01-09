const express=require("express")
const app=express();
const cors=require("cors")
const PORT=1500;
app.use(cors())
const db=require('./db')
const AuthController=require('./controller/authController')
app.get("/",function(req,res){
    res.send("hello")
})
app.use("/auth", AuthController);
app.listen(PORT, () => console.log("Server started on the port", PORT));