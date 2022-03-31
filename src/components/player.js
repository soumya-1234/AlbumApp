import React, { useEffect, useState } from "react";
import Data from "./data.json";
import {Card,Button,Alert} from "react-bootstrap";
import axios from "axios";

const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}

const Player=()=>{
    const [items,setItems]= useState(getLocalItems());
    const [searchTerm,setSearchTerm]=useState('');
    const [show,setShow]=useState(false);
    

    const deletedata=(index)=>{
        const updateditems=items.filter((elem)=>{
            return index !== elem.id;

        });
        
        setItems(updateditems);
        setShow(true)
        this.timer = setTimeout(() => alert('Sucessfully deleted'), 1000);
    }
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(items))
    },[items]);
    return (
        <>
            
            <div id="s1">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control col-sm-8" type="search" placeholder="Search" aria-label="Search" onChange={e=>setSearchTerm(e.target.value)}/>
                            
                </form>
                {
                    items.filter((val)=>{
                        if(searchTerm === ""){
                            return val
                        }     
                        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                            
                    }).map((val,key)=>{
                        return  <div class="float-left">
                                    <div class="card-wrap">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={Data[Math.floor(Math.random()*10)].url}/>
                                            <Card.Body>
                                                <Card.Title>Name - {val.name}</Card.Title>
                                                <Card.Text>Email - {val.email}</Card.Text>
                            
                                                <Card.Text>Username - {val.username}</Card.Text>
                                                <Card.Text>Website - {val.website}</Card.Text>
                                                <button type="submit" class="btn btn-danger btn-block" onClick={()=>deletedata(val.id)}>Delete</button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            })  
                            

                        }
        </div>
        
    </>
    )
}

export default Player;