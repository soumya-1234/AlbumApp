import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}


const Edit=()=>{
    const navigate=useNavigate();
    const {id,name,username,email,website}=useParams();
    const [passname,setPassname]=useState(name);
    const [inputemail,setInputemail]=useState(email);
    const [inputname,setInputname]=useState(name);
    const [inputusername,setInputusername]=useState(username);
    const [inputwebsite,setInputwebsite]=useState(website);
    const [items,setItems]= useState(getLocalItems());
    const [isEditItem,setIsEditItem]=useState(null);
    const [show,setShow]=useState(false);


    const editdata=(id1)=>{
        
        console.log(id1);
        let newEditItem=items.find((elem)=>{
            return elem.id===id1
        });
        setPassname(inputname)
        setItems(
            items.map((elem)=>{
                if(elem.id === id1){
                    return{...elem, name:inputname,username:inputusername,email:inputemail,website:inputwebsite}
                }
                return elem;
            })
        )
        setInputname('')
        setInputemail('')
        setInputusername('')
        setInputwebsite('')
        setIsEditItem(null);
        setShow(true)
    }
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(items))
    },[items]);
    return (
        <>
            <div className="container">
                <form>
                    <div className="form-group" >
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
                    <button type="submit" class="btn btn-primary btn-block" onClick={()=>editdata(id)}>Submit</button>
                </form>
            </div>
            {
                show ? <Alert variant="success">
                <Alert.Heading>Sucessfully Edited</Alert.Heading>
                </Alert>:<h1></h1>
            }
        </>
    )
}

export default Edit;