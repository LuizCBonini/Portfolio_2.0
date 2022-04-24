import React from 'react';
import { IoHome, IoPersonCircle, IoGitBranch, IoCodeSlash, IoMail } from 'react-icons/io5'

import { HeaderStyle } from './HeaderStyle';

const Header = () => {
    return ( 
        <HeaderStyle>

            <a href="#home">
                <h2 className="logotype">Luiz Bonini</h2>
            </a>
            <div>
                <nav className="nav-bar">

                    
                    <ul className="menu">

                        <li>
                            <a href="#home">
                                <span><IoHome/> Início</span>
                            </a>
                        </li>

                        <li>
                            <a href="#about">
                                <span><IoPersonCircle/> Sobre</span>
                            </a>
                        </li>

                        <li>
                            <a href="#projects">
                                <span><IoGitBranch/> Projetos</span>
                            </a>
                        </li>

                        <li>
                            <a href="#skills">
                                <span><IoCodeSlash/> Skills</span>
                            </a>
                        </li>

                        <li>
                            <a href="#contact">
                                <span><IoMail/> Contato</span>
                            </a>
                        </li>

                    </ul>

                </nav>
            </div>
        </HeaderStyle>
     );
}
 
export default Header;