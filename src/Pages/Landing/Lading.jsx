import React, { useEffect, useState } from 'react';

// Components:
import Button from '../../assets/Components/Button/Button'

// Style
import { LandingStyle } from './LandingStyle';

// Icons:
import {FiLinkedin, FiGithub} from 'react-icons/fi'

// Images:
import me from '../../assets/img/html-css-js-react-removebg.png'
import Success from '../../assets/Components/Alerts/SuccessAlert';

const Landing = () => {

    const [showAlert, setShowAlert] = useState(false);

    
    
    const copyToClipboard = () => {
        const copiado = 'lc.bonini13@gmail.com';
        navigator.clipboard.writeText(copiado);
        setShowAlert(true)
    }
    
    const setFalseAlert = () => {
        setShowAlert(false)
    }
    
    useEffect(()=>{
        setShowAlert(showAlert)
        if(showAlert == true) setTimeout(setFalseAlert, 3000);
    })

    return ( 
        <LandingStyle id='home'>

            <Success showAlert={showAlert} message="Copiado para área de transferência!"></Success>

            <svg className="home-blob" viewBox="0 0 200 200">
                <mask id="mask0" mask-type="alpha">
                    <path fill="#6E57E0" d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z" transform="translate(100 100)" />
                </mask>
                <g mask="url(#mask0)">
                    <path d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z" transform="translate(100 100)" />
                    <image className="home__blob-img" x="50" y="18" xlinkHref={me} alt="Minha foto."/>
                </g>
            </svg>

            <div className='hello'>
                <span>
                    <h3>oi, eu sou o</h3>
                    <h1><span>Luiz</span> Bonini</h1>
                    <p>Sou um <span>desenvolvedor Front-End</span>, criador de códigos de qualidade seguindo o <span>Clean Code</span>, utilizando <span>JavaScript</span>, <span>React</span>, <span>Photoshop</span> e noções de <span>SEO</span>.</p>
                </span>

                <Button className='email' onPress={copyToClipboard}>lc.bonini13@gmail.com</Button>

                <div className="social-content">
                    <a className="social-media" href="https://www.linkedin.com/in/dev-luiz-carlos/" target='_blank' rel="noreferrer"><FiLinkedin/></a>
                    
                    <a className="social-media" href="https://github.com/LuizCBonini" target='_blank' rel="noreferrer"><FiGithub/></a>
                </div>
                
            </div>

        </LandingStyle>
     );


}
 
export default Landing;