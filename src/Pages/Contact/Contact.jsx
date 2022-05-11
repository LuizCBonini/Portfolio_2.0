import React from 'react';

import {FiCoffee, FiSend, FiLinkedin, FiGithub} from 'react-icons/fi'

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

import { ContactStyle } from './ContactStyle';

const Contact = () => {
    return ( 
        <ContactStyle id='contact'>
            <SectionTitle subTitle={"Vamos conversar?"} Title={"Contato"}/>

            <div className='contact-content'>
                <h2>"Gostaria de entrar e tomar um xícara de café?" <FiCoffee/></h2>
                <p>Caso queira marcar um café, um chá ou um chat - você pode me achar nas redes sociais ou pelo e-mail <FiSend/>. Será um prazer conversar.</p>

                <a className="social-media" href="https://www.linkedin.com/in/dev-luiz-carlos/" target='_blank' rel="noreferrer"><FiLinkedin/></a>
                    
                <a className="social-media" href="https://github.com/LuizCBonini" target='_blank' rel="noreferrer"><FiGithub/></a>
            </div>
        </ContactStyle>
     );
}
 
export default Contact;