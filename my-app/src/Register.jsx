import React from 'react';

function Register(props) {
    const stat=sessionStorage.getItem("msg")
   console.log(stat)
    return (
        <div>
           
            {stat === "true"?"Logged in":"Log in first"}
            
        </div>
    );
}

export default Register;