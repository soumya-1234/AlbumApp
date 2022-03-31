import React,{useState,useEffect} from "react";
import { Card,Button } from 'react-bootstrap';
import axios from 'axios';
import Data from './data.json';
import {useNavigate,Link} from 'react-router-dom';
import Login from "./login";

const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}
const Allcard=()=>{
    const navigate=useNavigate();
    console.log(Data);
    const [searchTerm,setSearchTerm]=useState('');
    const [users, setUsers] = useState({ hits: [] });
    const [show,setShow] =useState(true)
    const [items,setItems]= useState(getLocalItems());

          
        return (
            <>
                    <div id="s1">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control col-sm-8" type="search" placeholder="Search" aria-label="Search" onChange={e=>setSearchTerm(e.target.value)}/>
                            
                        </form>
                        
                        {
                            items.filter((elem)=>{
                                if(searchTerm === ""){
                                    return elem
                                }
                                
                                else if(elem.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return elem
                                }

                            }).map((elem)=>{
                                return(
                                    <div class="float-left">
                                            <div class="card-wrap">
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Img variant="top" src={Data[Math.floor(Math.random()*10)].url}/>
                                                        <Card.Body>
                                                            <Card.Title>Name - {elem.name}</Card.Title>
                                                            <Card.Text>Email - {elem.email}</Card.Text>
                                                            <Card.Text>Username - {elem.username}</Card.Text>
                                                            <Card.Text>Website - {elem.website}</Card.Text>
                                                            <Link to={`/log/${elem.email}/${elem.username}/${elem.name}`} role="button" class="btn btn-primary active">Login</Link>
                                                        </Card.Body>
                                                    </Card>
                                            </div>
                                        </div>
                                )
                            })
                        }

                    </div>           
            </>
        )
    }

export default Allcard;