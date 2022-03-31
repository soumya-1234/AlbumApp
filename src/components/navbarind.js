import React from "react";
import { Link } from "react-router-dom";

const Navbarind=()=>{
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
                    </ul>
                </div>
                <nav>
                    <Link to="/logou">Logout</Link>
                </nav>
            </nav>
        </>
    )
}

export default Navbarind;