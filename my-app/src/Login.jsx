import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
const lurl="http://localhost:1500/auth/login"

function Login() {
    /*{
     "email": "udit@123gmail.com",
 "password": "123"
}*/
const navigate=useNavigate();
  const [message,setMsg]=useState("")
const[email,setMail]=useState('');
const[pass,setPass]=useState('');
const[data,setData]=useState({
  email:email,
  password:pass
})

function handleChange(e){
  const {name,value}=e.target;
  if(name==="email"){
    setMail(value);
  }
  if(name==="pass"){
    setPass(value);
  }

}

useEffect(()=>{
setData((prev)=>({
  ...prev,
  email:email,
  password:pass

}))
},[email,pass])




async function handleSubmit(){

    fetch(lurl,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data,"login")
        console.log(data.auth)
    sessionStorage.setItem("msg",data.auth)
if(data.auth === false){
    console.log("in")
    setMsg(data.auth
        )
        console.log(message)
}
else{
    console.log("out")
    sessionStorage.setItem("token",data.token)
   // this.props.history.push("/register")
   navigate("/register")
}

})


console.log(data)

    setData({email:"",
    password:""})
    setMail("");
    setPass("")
}

        








  return (
    <div className="vh-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>

                <form class="mx-1 mx-md-4">

                 

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" 
                      
                      name="email"
                      value={email}
                      
                      onChange={(e)=>handleChange(e)}
                      
                      
                      />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"
                      
                      name="pass"
                      value={pass}
                      
                      onChange={(e)=>handleChange(e)}
                      
                      />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>


                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Login;