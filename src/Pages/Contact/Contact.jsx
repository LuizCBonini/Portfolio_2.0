import React from 'react';

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

import { ContactStyle } from './ContactStyle';

import Button from '../../assets/Components/Button/Button'

const Contact = () => {
    return ( 
        <ContactStyle id='contact'>
            <SectionTitle subTitle={"Vamos conversar?"} Title={"Contato"}/>

            <div className='form-box'>
                <form target="_blank" action="https://formsubmit.co/lc.bonini13@gmail.com" method="POST">
                    <label htmlFor="name">Nome*</label>
                    <input type="text" id='name' name="name" placeholder='Como devo lhe chamar' required />
                    <label htmlFor="e-mail">E-mail*</label>
                    <input type="email" id='e-mail' name="e-mail" placeholder='Para que eu responda' required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" placeholder='Me diga, quando iremos bater um papo e tomar um cafézinho. ☕' cols="30" rows="10" id='message' required></textarea>
                    <Button type="submit">Enviar</Button>
                </form>
            </div>

            <h1 className='frase'>Vamos trazer seu projeto <br/> para a <span>realidade</span>.</h1>
            <p className='subFrase'>Me mande uma mensagem e irei lhe reponder o mais breve possível.</p>

            <div className="background"></div>
        </ContactStyle>
     );
}
 
export default Contact;