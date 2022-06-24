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

            <a className={activeNav === '#' ? 'active' : ''} href="#"><HiOutlineHome/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonBadgeFill/></a>
            <a href="#resume"><SiBookstack/></a>
            <a href="#contact"><AiFillPhone/></a>
        </nav>
    );
}

export default Nav;