import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <nav>
                                <Link to="/allplayer">All Player</Link>
                            </nav>
                        </li>
                        <li class="nav-item active" className="n1">
                            <nav>
                                <Link to="/dashboard">Dashboard</Link>
                            </nav>
                        </li>
                        <li class="nav-item active" className="n1">
                            <nav>
                                <Link to="/add">Add Player</Link>
                            </nav>
                        </li>
                    </ul>
                    <Link to="/loginr">Login</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

