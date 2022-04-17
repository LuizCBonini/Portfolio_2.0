import React from 'react';
import { IoHomeOutline, IoPersonCircleOutline, IoGitBranchOutline, IoCodeSlash, IoMailOutline } from 'react-icons/io5'

import { HeaderStyle } from './HeaderStyle';

const Header = () => {
    return ( 
        <HeaderStyle>
            <a href="#landing">
                <h2 className="logotype">Luiz Bonini</h2>
            </a>

            <div>
                <nav className="nav-bar">

                    <ul className="menu">
                        <li>
                            <a href="#home">
                                <span><IoHomeOutline/> Início</span>
                            </a>
                        </li>

                        <li>
                            <a href="#about">
                                <span><IoPersonCircleOutline/> Sobre</span>
                            </a>
                        </li>

                        <li>
                            <a href="#projects">
                                <span><IoGitBranchOutline/> Projetos</span>
                            </a>
                        </li>

                        <li>
                            <a href="#skills">
                                <span><IoCodeSlash/> Skills</span>
                            </a>
                        </li>

                        <li>
                            <a href="#contact">
                                <span><IoMailOutline/> Contato</span>
                            </a>
                        </li>

                    </ul>

                </nav>
            </div>
        </HeaderStyle>
     );
}
 
export default Header;