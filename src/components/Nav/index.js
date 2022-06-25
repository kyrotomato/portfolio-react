import React from "react";
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import {SiBookstack} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'
import {useState} from 'react'

function Nav(){
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>

            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><HiOutlineHome/></a>
           <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><SiBookstack/></a>
           <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsFillPersonBadgeFill/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
            
        </nav>
    );
}

export default Nav;