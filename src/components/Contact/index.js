import React from 'react';
import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'


function Contact(){
    return(
    <section id="contact">
            <h5> Get in touch! </h5>
            <h2> Contact Me!</h2>

            <div className='container contactContainer'>
                <div className='contactOptions'>
                <article className='contactOption'>
                    <MdOutlineMailOutline className='contactOption-icon' />
                    <h4>Email</h4>
                    
                    <a href='mailto:thomasmccalister@gmail.com'>Send a Message</a>
                </article>
                <article className='contactOption'>
                    <AiFillLinkedin className='contactOption-icon'/>
                    <h4>LinkedIn</h4>
                    
                    <a href='https://www.linkedin.com/in/thomas-mccalister-1b857917a'>Find me on LinkedIn!</a>
                </article>
                <article className='contactOption'>
                    <AiFillGithub className='contactOption-icon'/>
                    <h4>Github</h4>
                    
                    <a href='https://github.com/kyrotomato'>Check out my Github!</a>
                </article>
                </div>
                <form action='https://submit-form.com/uBCbLXJy'>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
            </section>
    )
}

export default Contact