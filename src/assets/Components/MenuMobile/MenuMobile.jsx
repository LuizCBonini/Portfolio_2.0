import React  from 'react';


import { MenuStyled } from './MenuStyled';

import {IoClose, IoHome, IoPersonCircle, IoGitBranch, IoCodeSlash, IoMail} from 'react-icons/io5'

const MenuMobile = ({menuIsVisible, setMenuIsVisible}) => {
    
    
    return ( 
        
        <MenuStyled isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
            
            <nav>
                <a href="#home" onClick={() => setMenuIsVisible(false)}>
                    <span><IoHome/> Início</span>
                </a>

                <a href="#about" onClick={() => setMenuIsVisible(false)}>
                    <span><IoPersonCircle/> Sobre</span>
                </a>

                <a href="#projects" onClick={() => setMenuIsVisible(false)}>
                    <span><IoGitBranch/> Projetos</span>
                </a>

                <a href="#skills" onClick={() => setMenuIsVisible(false)}>
                    <span><IoCodeSlash/> Skills</span>
                </a>
                
                <a href="#contact" onClick={() => setMenuIsVisible(false)}>
                    <span><IoMail/> Contato</span>
                </a>

            </nav>
        </MenuStyled>
     );
}
 
export default MenuMobile;