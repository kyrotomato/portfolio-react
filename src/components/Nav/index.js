import React from "react";
import './nav.css';

function Nav(){
    return(
        <div>
        <ul id="navHeader">
            <li id="homeHeader"><a>HomePage</a></li>
            <li id="projectsHeader"><a>Projects</a></li>
            <li id="resumeHeader"><a>Resume</a></li>
        </ul>
        </div>
    );
}

export default Nav;