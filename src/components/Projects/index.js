import React from 'react';
import './projects.css';
import patioImg from '../../Assets/Images/patio.png'
import fantasyImg from '../../Assets/Images/fantasy.png'
import weatherImg from '../../Assets/Images/weather.png'
import readmeIMG from '../../Assets/Images/readmegen.png'
import ecommerceImg from '../../Assets/Images/ecommerce.png'
import notesImg from '../../Assets/Images/notesnow.png'

const proj = [
    {
        id: 1,
        image: patioImg,
        title: 'Patio',
        github: 'https://github.com/kyrotomato/Patio/',
        demo: 'https://kyrotomato.github.io/Patio/'
    },
    {
        id: 2,
        image: fantasyImg,
        title: 'Fantasy Chat',
        github: 'https://github.com/jared-ruiz/Fantasy-Chat',
        demo: 'https://vast-refuge-25222.herokuapp.com/login/'
    },
    {
        id: 3,
        image: weatherImg,
        title: 'Weather Dashboard',
        github: 'https://github.com/kyrotomato/weather-dashboard',
        demo: 'https://kyrotomato.github.io/weather-dashboard'
    },
    {
        id: 4,
        image: readmeIMG,
        title: 'Readme Generator',
        github: 'https://github.com/kyrotomato/readme-generator/',
        demo: 'https://kyrotomato.github.io/readme-generator/'
    },
    {
        id: 5,
        image: notesImg,
        title: 'Notes Now!',
        github: 'https://github.com/kyrotomato/note-taker/',
        demo: 'https://notes-now.herokuapp.com/'
    },
    {
        id: 6,
        image: ecommerceImg,
        title: 'E-Commerce Back end',
        github: 'https://github.com/kyrotomato/e-marketplace',
        demo: 'https://drive.google.com/file/d/1o0XGFgGuNr63VPtDK1_nktIMeuSjHDIa/view?usp=sharing'
    }
]

function Projects(){
    return(<section id="projects">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container projectContainer'>
        {
            proj.map(({id, image, title, github, demo}) => {
                return(
                    <article key={id} className='projectItem'>
                    <div className='projectItem-image'>
                        <img src={image} alt={title}/>
                    </div>
                    <h3>{title}</h3>
                    <div className='projectItem-btn'>
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                )
            })
        }
        </div>
        <div className='someSpace'></div>
   


        </section>
    )
}

export default Projects