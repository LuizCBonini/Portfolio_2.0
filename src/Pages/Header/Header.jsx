import React from 'react';
import { IoHome, IoPersonCircle, IoGitBranch, IoCodeSlash, IoMail, IoMenu } from 'react-icons/io5'

import { HeaderStyle } from './HeaderStyle';


const Header = ({setMenuIsVisible}) => {


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
            <IoMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={35}/>
        </HeaderStyle>
     );
};

// class MobileNavbar {
//     constructor(mobileMenu, menu, navLinks) {
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.menu = document.querySelector(menu);
//         this.navLinks = document.querySelectorAll(navLinks);
//         this.activeClass = "active";

//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLink() {
//         this.navLinks.forEach((link, index) => {
//             link.style.animation
//             ? (link.style.animation = "")
//             : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
//         });
//     }

//     handleClick() {
//         this.menu.classList.toggle(this.activeClass);
//         this.mobileMenu.classList.toggle(this.activeClass);
//         this.animateLink();
//     }


//     addClickEvent() {
//         this.mobileMenu.addEventListener('click', this.handleClick);
//     }

//     init() {
//         if(this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".menu",
//     ".menu li",
// );


// mobileNavbar.init();



export default Header;