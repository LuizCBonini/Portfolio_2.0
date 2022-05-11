import React from 'react';
import {AiFillHeart} from 'react-icons/ai'

import { FooterStyle } from './FooterStyle';

const Footer = () => {
    return (
        <FooterStyle>
            <p>Site desenvolvido com <AiFillHeart/> por <a href="https://www.linkedin.com/in/dev-luiz-carlos/" target='_blank' rel="noreferrer">Luiz Carlos Bonini</a></p>
        </FooterStyle>
    )
}
 
export default Footer;