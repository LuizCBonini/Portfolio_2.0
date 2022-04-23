import React from 'react';
import { AboutStyle } from './AboutStyle';

const About = () => {
    return ( 
        <AboutStyle id='about'>
            <div className='about-title'>
                <span>Um pouco sobre mim</span>
                <h2>Sobre</h2>
            </div>

            <div className="about-data">
                <h2></h2>
            </div>

        </AboutStyle>
     );
}
 
export default About;