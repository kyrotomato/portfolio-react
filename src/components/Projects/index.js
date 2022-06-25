import React from 'react';
import './projects.css';
import patioImg from '../../Assets/Images/patio.png'
import Img2 from '../../Assets/Images/patio.png'
import Img3 from '../../Assets/Images/patio.png'
import Img4 from '../../Assets/Images/patio.png'
import Img5 from '../../Assets/Images/patio.png'

function Projects(){
    return(<section id="projects">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container projectContainer'>
            <article className='projectItem'>
                <div className='projectItem-image'>
                    <img src={patioImg} alt="Patio"/>
                </div>
                <h3></h3>
                <a href='https://github.com/kyrotomato/Patio' className='btn'>Github</a>
                <a href='https://kyrotomato.github.io/Patio/' className='btn btn-primary' target='_blank'>Live Demo</a>

            </article>
        </div>
   


        </section>
    )
}

export default Projects