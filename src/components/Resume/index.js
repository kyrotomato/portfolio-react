import React from 'react'
import './resume.css'
import { BsCheckCircle } from 'react-icons/bs'

function Resume() {
    return (<section id="resume">
        <h5>My Experience</h5>
        <h2>Experience</h2>
        <div className="container experienceContainer">
            <div className="experiencePlaces">
                <h3>Work History</h3>
                <div className="experienceContent">
                    <article className="experienceDetails">
                        <div>
                            <h4>United States Air Force</h4>
                            <small className='text-dark'>March 2013 - March 2019</small>
                            <details className=' '>Aircraft Propulsions Systems Technician</details>
                        </div>

                    </article>
                    <article className="experienceDetails">
                        <div>
                            <h4>Standard Aero</h4>
                            <small className='text-dark'>August 2021 - Jan 2022</small>
                            <details className=' '>Engine Assembly Mechanic/Mechanic II</details>
                        </div>
                    </article>

                </div>
            </div>
            <div className="experienceSkills">
                <h3>Skills</h3>
                <div className='experienceContent'>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>                    <h4>HTML/CSS/GIT</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>Web and Server side APIs</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>Node</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>Express.js</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>SQL/NoSQL</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>MERN</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experienceDetails'>
                        <BsCheckCircle className='experienceDetails-icon'/>
                        <div>
                        <h4>React.JS</h4>
                        <small className='text-light'>Beginner</small>
                        </div>
                    </article>

                </div>
            </div>
        </div>
        <div className='someSpace'></div>
    </section>

    )
}
//test
export default Resume