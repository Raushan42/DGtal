import React from 'react'
import '../../styles/hero.css'
// import { Link } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
// import Graphic from './Graphic'

import heroDarkImage from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'

// const graphics = () =>{
//     const navigate = useNavigate()

//     const handleRedirect = () =>{
//         navigate('Graphic.jsx')
//     }
// }



const Hero = ({theme}) => {
  return <section className='hero__section' id='home'>
    <div className='container'>
        <div className='hero__wrapper'>
            <div className='hero__content'>
                <div>
                    <h2>We're Creating Perfect</h2>
                    <h2>Digital Products To</h2>
                    <h2 className='highlight'>Promote Your Brand</h2>
                </div>
                <p className='description'>
                    Emphasizes the agency’s dedication to making clients' digital growth its top priority, showcasing a results-driven and client-focused approach.
                </p>

                <div className='hero__btns'>
                    <button className='primary__btn'>Get Started Now</button>
                    {/* <Link to="/Graphic"> */}
                        <button className='secondary__btn'>Discover More</button>
                    {/* </Link> */}
                </div>
            </div>

            <div className='hero__img'>
                <img src={theme ==='light-theme' ? lightImg : heroDarkImage} alt='hero-img'/>
            </div>
        </div>
    </div>
  </section>
}

export default Hero