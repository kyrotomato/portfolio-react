import React from "react";
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi'
import {BsFillPersonBadgeFill} from 'react-icons/bs'
import {SiBookstack} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'


function Nav({handlePageChange, activeNav}){
    
    return(
        <nav>

            <a  onClick={() => handlePageChange('home')} className={activeNav === 'home' ? 'active' : ''} ><HiOutlineHome/></a>
           <a  onClick={() => handlePageChange('resume')} className={activeNav === 'resume' ? 'active' : ''}><SiBookstack/></a>
           <a  onClick={() => handlePageChange('projects')} className={activeNav === 'projects' ? 'active' : ''}><BsFillPersonBadgeFill/></a>
            <a  onClick={() => handlePageChange('contact')} className={activeNav === 'contact' ? 'active' : ''}><AiFillPhone/></a>
            
        </nav>
    );
}

export default Nav;