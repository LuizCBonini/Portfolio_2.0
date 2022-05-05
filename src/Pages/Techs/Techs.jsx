import React from 'react';

import { TechStyle } from './TechsSyle';

import BgImage from '../../assets/img/TechsBG.png';
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle'

import {ImHtmlFive2, ImCss3, ImGit, ImGithub} from 'react-icons/im'
import {IoLogoJavascript, IoLogoNpm} from 'react-icons/io'
import {RiReactjsLine} from 'react-icons/ri'
import {SiStyledcomponents, SiSwiper} from 'react-icons/si'

const Techs = () => {
    return ( 
        <TechStyle id='skills'>
            <SectionTitle subTitle={"O que eu estudo e ando me aprimorando"} Title={"Tecnologias"}/>

            <section>
                <div>
                    <ul>

                        <li>
                            <ImHtmlFive2/>
                            <p>HTML</p>
                        </li>

                        <li>
                            <ImCss3/>
                            <p>CSS</p>
                        </li>

                        <li>
                            <IoLogoJavascript/>
                            <p>JavaScript</p>
                        </li>

                        <li>
                            <RiReactjsLine/>
                            <p>React</p>
                        </li>

                        <li>
                            <SiStyledcomponents/>
                            <p>Styled</p>
                            <p>Components</p>
                        </li>

                        <li>
                            <IoLogoNpm/>
                            <p>NPM</p>
                        </li>

                        <li>
                            <ImGit/>
                            <p>Git</p>
                        </li>

                        <li>
                            <ImGithub/>
                            <p>Github</p>
                        </li>

                        <li>
                            <SiSwiper/>
                            <p>Swiper</p>
                        </li>

                    </ul>
                </div>
                
                <img src={BgImage} alt=""/>
            </section>
        </TechStyle>
     );
}
 
export default Techs;