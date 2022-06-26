import React from 'react';
import './header.css';
import ME from '../../Assets/Images/me-placeholder.jpg'
import Socials from './socials';

function Header(){
    return(<header>
        <div className='container headerContainer'>
            <h5>Hello I am</h5>
            <h1>Thomas McCalister</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <Socials></Socials>

            <div className='me'>
                <img src={ME} alt='me'/>
            </div>

            <a href='#contact' className='scrollDown'>Welcome!</a>

        </div>
    </header>
    )
        
}


export default Header;