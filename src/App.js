import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Allcard from './components/allcard';
import Dashboard from './components/dashboard'
import {Routes,Route, BrowserRouter, useParams} from "react-router-dom";
import Login from './components/login';
import Loginr from './components/loginr';
import Player from './components/player';
import { useState } from 'react';
import Indv from './components/indv';
import Navbarlog from './components/navbarlog';
import Add from './components/add';
import Navbarind from './components/navbarind';
import Edit from './components/edit';
import Indv1 from './components/indv1';

function App() {


  return (
   <>
      <Routes>
        <Route exact path="/" element={[<Navbar/>,<Allcard/>]}/>
        <Route exact path="/allplayer" element={[<Navbar/>,<Allcard/>]}/>
        <Route exact path="/dashboard" element={[<Navbar/>,<Dashboard/>]}/>
        <Route exact path="/log/:email/:password/:name" element={[<Navbar/>,<Login/>]}/>
        <Route exact path="/loginr" element={[<Navbar/>,<Loginr/>]}/>
        <Route exact path="/player" element={[<Navbarlog/>,<Player/>]}/>
        <Route exact path="/indv/:name" element={[<Navbarind/>,<Indv/>]}/>
        <Route exact path="/logout" element={[<Navbar/>,<Loginr/>]}/>
        <Route exact path="/add" element={[<Navbar/>,<Add/>]}/>
        <Route exact path="/logou" element={[<Navbar/>,<Allcard/>]}/>
        <Route exact path="/edit/:id/:name/:email/:username/:website" element={[<Navbarind/>,<Edit/>]}/>
        
      </Routes>
   </>
  );
}

export default App;