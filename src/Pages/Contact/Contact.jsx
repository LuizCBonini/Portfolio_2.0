import React from 'react';

import {FiCoffee, FiSend, FiLinkedin, FiGithub} from 'react-icons/fi'

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

import { ContactStyle } from './ContactStyle';

const Contact = () => {
    return ( 
        <ContactStyle id='contact'>
            <SectionTitle subTitle={"Vamos conversar?"} Title={"Contato"}/>

            <div className='form-box'>
                <form target="_blank" action="https://formsubmit.co/lc.bonini13@gmail.com" method="POST">
                    <label htmlFor="name">Nome*</label>
                    <input type="text" id='name' name="name" placeholder='Como devo lhe chamar' required />
                    <label htmlFor="e-mail">E-mail*</label>
                    <input type="email" id='e-mail' name="e-mail" placeholder='Para receber a resposta' required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" placeholder='Me diga aqui, quando iremos bater um papo e tomar um cafézinho. ☕' cols="30" rows="10" id='message' required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            {/* <div className='contact-content'>
                <h2>"Gostaria de entrar e tomar um xícara de café?" <FiCoffee/></h2>
                <p>Caso queira marcar um café, um chá ou um chat - você pode me achar nas redes sociais ou pelo e-mail <FiSend/>. Será um prazer conversar.</p>

                <a className="social-media" href="https://www.linkedin.com/in/dev-luiz-carlos/" target='_blank' rel="noreferrer"><FiLinkedin/></a>
                    
                <a className="social-media" href="https://github.com/LuizCBonini" target='_blank' rel="noreferrer"><FiGithub/></a>
            </div> */}
        </ContactStyle>
     );
}
 
export default Contact;