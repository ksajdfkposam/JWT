const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const User=require("../models/userModels");
const bodyParser=require("body-parser");
const jwt = require("jsonwebtoken");
var _ = require("lodash");
const config = require("../config");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

console.log("AUTH STARTED")
router.post("/register",async function(req,res){
    console.log(req.body)

/*try{
const yuzi=await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
    phone: req.body.phone,
    role: req.body.role ? req.body.role : "user",
}),


   
    res.status(200).json({
        status: "OK",
        message: "User created"
    });

}

catch(err){
    console.log(err)
}*/
   
console.log(req.body)
try{
    let hashPass=bcrypt.hashSync(req.body.password,8);
    console.log(hashPass)

    const yuzi= await User.create({
        name: req.body.name,
    email: req.body.email,
    password: hashPass,
    phone: req.body.phone,
    role: req.body.role ? req.body.role : "user",
    })
console.log(yuzi)
    res.status(200).json({
        status: "OK",
        message: "User created"
    });

}catch(err){
    console.log(err)

}
    
    


})




router.post("/login", async (req, res) => {
    try{
        const user= await User.findOne({ email: req.body.email });
        if (!user) 
        {return res.send({ auth: false, token: "Invalid credentials" });}
        else{
            const passIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passIsValid)
              return res.send({ auth: false, token: "Invalid credentials" });
            let token = jwt.sign({ id: user._id }, config.secret, {
              expiresIn: 86400, //24 hours -> in sec
            });
            res.send({auth: true, token: token});
        }




    }catch(err){
        console.log(err)
    }
  
  });


module.exports = router;


/*
 (err, user) => {
      if (err) return res.send({ auth: false, token: "Error while logging" });
      if (!user) return res.send({ auth: false, token: "Invalid credentials" });
      else {
        const passIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passIsValid)
          return res.send({ auth: false, token: "Invalid credentials" });
        let token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400, //24 hours -> in sec
        });
        res.send({auth: true, token: token});
      }
    }



*/ 