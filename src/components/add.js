import React, { useEffect, useState } from "react";
import { cleanup } from '@testing-library/react';


import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";





const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}

const Add=()=>{
    const navigate=useNavigate();
    const [inputemail,setInputemail]=useState();
    const [inputname,setInputname]=useState();
    const [inputusername,setInputusername]=useState();
    const [inputwebsite,setInputwebsite]=useState();
    const [items,setItems]= useState(getLocalItems());
    const [show,setShow]=useState(false);

    const adddata=()=>{

        if(!inputname || !inputemail || !inputusername || !inputwebsite){
            alert("Please fill your data")
        }
        else{
            const allInputData={id:new Date().getTime().toString(),name:inputname,username:inputusername,email:inputemail,website:inputwebsite}
            setItems([...items,allInputData]);
            setInputname('')
            setInputemail('')
            setInputusername('')
            setInputwebsite('')
            setShow(true)
        }
    }
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(items))
    },[items]);
    return (
        <>
           
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={inputname} 
                        onChange={(e)=>setInputname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" value={inputusername} 
                        onChange={(e)=>setInputusername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" value={inputemail} 
                        onChange={(e)=>setInputemail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Website</label>
                        <input type="text" className="form-control" value={inputwebsite} 
                        onChange={(e)=>setInputwebsite(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" onClick={adddata}>Submit</button>
                </form>
            </div>
            {
                show ? <Alert variant="success">
                <Alert.Heading>Sucessfully Added</Alert.Heading>
                </Alert>:<h1></h1>
            }
        </>
    )
}

export default Add;