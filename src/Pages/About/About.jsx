import React from 'react';
import { AboutStyle } from './AboutStyle';

import video from '../../assets/img/maos_programando.mp4'
import mask from '../../assets/img/mask.jpg'

const About = () => {
    return ( 
        <AboutStyle id='about'>
            <div>
                <span>Um pouco sobre mim</span>
                <h2>Sobre</h2>
            </div>

            <section>
                <video src={video} autoPlay loop muted type="mp4" alt="video of hands developing a program"></video>
                <img src={mask} alt="mask for the video" />
            </section>
            

        </AboutStyle>
     );
}
 
export default About;