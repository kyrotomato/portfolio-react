import React from 'react';
import './about.css'
import meAlso from '../../Assets/Images/me-also.jpg'
import resume from '../../Assets/Images/Resume.pdf'

function About() {
    return (
        <section class="aboutSection" id="about">
            <h5>
                Who am I?
            </h5>
            <h2>About me</h2>
            <div className="container aboutContainer">
                <div className='aboutMe'>
                <div className='aboutMeImg'>
                    <img src={meAlso} alt=""/>
                </div>
                </div>

                <div className='aboutContent'>
                    <p>This will be a paragraph talking about my accomplishments that I most likely will have to change a bunch of times
                        currently I am just throwing all this in here so I have a lot of text. I will talk about my troubleshooting experience and all that jazz.
                        Try to take this time to elaborate to employers that I have a diverse skill set, not just what I learned in this bootcamp.
                        Maybe mention something about high school robotics.
                    </p>
                    <p>This paragraph will be a summary, and an explanation of my soft skills. This paragraph shouldnt be as long but is still really important</p>
                    <a href={resume} className='btn btn-primary'>My Resume!</a>
                </div>

            </div>
            
        </section>

    );
}

export default About;