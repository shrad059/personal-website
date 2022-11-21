import React, { useEffect, useState } from "react";
import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){

    const [expandNavbar, setNavbar]= useState(false);
    const location=useLocation();
    useEffect(()=>{
        setNavbar(false);
    },[location]);
    return(
        <div className="navbar" id={expandNavbar? "open" :"close"}>
        <span>
        <Link to="/" className="websiteName">SHRADDHA</Link>
        </span>
            <div className="links">
                     <Link to="/">SKILLS</Link>
                    <Link to="./pages/Projects.js">PROJECTS</Link>
                    <Link to="./pages/Projects.js">CONTACT</Link>
            </div>
            <div className="toggleButton">
                <button className="closeNav"
                    onClick={() => {
                        setNavbar((prev)=>!prev)
                        }
                    }
                >
                <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;