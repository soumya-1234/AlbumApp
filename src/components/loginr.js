import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginr=()=>{
    const navigate=useNavigate();
    const [logusername,setLogusername]=useState();
    const [logpassword,setLogpassword]=useState();
    const loge=()=>{
        if(logusername === "user@1234" && logpassword==="admin"){
            navigate("/player");
        }
        else{
            alert("Wrong username or password")
        }
    }
    return(
        <>
            <div id="f1">
            

            <div class="tab-content">
                <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
            >
                <form>
                    <div class="text-center col-sm-8">
                        <p>Sign in with:</p>
                    </div>
                    <div class="form-outline col-sm-8">
                        <input type="email" id="loginName" class="form-control" onChange={e => setLogusername(e.target.value)}/>
                        <label class="form-label" for="loginName">Email or username</label>
                    </div>
                    <div class="form-outline col-sm-8">
                        <input type="password" id="loginPassword" class="form-control" onChange={e => setLogpassword(e.target.value)}/>
                        <label class="form-label" for="loginPassword">Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block col-sm-8" onClick={loge}>Sign in</button>     
           
                </form>
            </div>
  
  </div>
            </div>
            

        </>
    )
}

export default Loginr;