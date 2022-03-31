import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card,Button } from 'react-bootstrap';
import Data from './data.json';
import { Link, useParams } from "react-router-dom";

const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}

const Indv1=()=>{
    const [items,setItems]= useState(getLocalItems());
    const {name}=useParams();

    
    return (
        <>
            <div id="s1">
                {
                    items.filter((val)=>val.name===name).map((val)=>{
                        return  <div class="float-left" id="c1">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={Data[Math.floor(Math.random()*10)].url}/>
                                                <Card.Body>
                                                    <Card.Title>Name - {val.name}</Card.Title>
                                                    <Card.Text>Email - {val.email}</Card.Text>
                                                   
                                                    <Card.Text>Username - {val.username}</Card.Text>
                                                    
                                                    <Card.Text>Website - {val.website}</Card.Text>
                                                    <Link to={`/edit/${val.id}/${val.name}/${val.email}/${val.username}/${val.website}`} role="button" class="btn btn-primary active">Edit</Link>
                                                </Card.Body>
                                            </Card>
                                        </div> 
                            
                        
                    })

                        }

                    </div>         
        </>
    )
}
export default Indv1;