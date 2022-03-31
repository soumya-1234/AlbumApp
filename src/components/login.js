import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

    
    const Login=()=>{
    const navigate=useNavigate();
    const [userpassword,setUserpassword]=useState();
    const {email,password,name}=useParams();
    const logu=()=>{
        if(userpassword==password){
            navigate(`/indv/${name}`);
        }
        else{
            alert("wrong password")
        }
    }
    return (
        <>
            <div id="f1">
                <form>
                    <div class="form-outline col-sm-8">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" value={email} />
                    </div>
                    <div class="form-outline col-sm-8">
                    <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" onChange={e => setUserpassword(e.target.value)}/>
                    </div>
                    <div id="b1">
                        <button type="button" class="btn btn-primary btn-block col-sm-8" onClick={logu}>Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;

