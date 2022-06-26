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
                        <img src={meAlso} alt="" />
                    </div>
                </div>

                <div className='aboutContent'>
                    <p>Hello my name is Thomas McCalister and I am from the beautiful city of San Antonio. I am a former maintenance professional 
                        who dedicated 6 years of service with the United States
                        Air Force. I worked on complex systems, modifying, repairing and troubleshooting jet engines. Ive learned to work
                        effectively as a team, having excellent comunication skills, and am experienced in complex problem solving
                        and critical thinking.
                        I had my first experience with programming on my high school robotics team where I self taught
                        myself Java using only documentation. After that I enlisted in the Air Force and used that same
                        go getter attitude to learn maintenance as well as principles of electricity.
                        After spending 6 months in a bootcamp of a different kind at The Univertsity of Texas at San Antonio, I am ready to hone the skills I
                        have learned as a Fullstack Web Developer to bring the same quality I have brought to my
                        former craft.
                    </p>
                    <p>I am certain my experience as a team member and leader will be valuable wherever I go next,
                        and the experience I have gained in my bootcamp will help me get there.
                        I am excited to start the next section of my professional career, if you have an opportunity to
                        learn and grow as a developer I would love to become an asset to your team. </p>
                    <a href={resume} className='btn btn-primary'>My Resume!</a>
                </div>

            </div>
            <div className='someSpace'></div>
        </section>

    );
}

export default About;