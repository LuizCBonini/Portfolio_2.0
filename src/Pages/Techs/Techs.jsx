import React from 'react';

import { TechStyle } from './TechsSyle';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle'

import {ImHtmlFive2, ImCss3, ImGit, ImGithub} from 'react-icons/im'
import {IoLogoJavascript, IoLogoNpm} from 'react-icons/io'
import {RiReactjsLine} from 'react-icons/ri'
import {SiStyledcomponents, SiSwiper, SiTailwindcss, SiAngular, SiTypescript} from 'react-icons/si'

const Techs = (BGImage) => {
    return ( 
        <TechStyle id='skills' >
            <SectionTitle subTitle={"O que eu estudo e ando me aprimorando"} Title={"Tecnologias"}/>

            <section>                
                    <span>
                        <ImHtmlFive2/>
                        <p>HTML</p>
                    </span>
                

                    <span>
                        <ImCss3/>
                        <p>CSS</p>
                    </span>

                    <span>
                        <IoLogoJavascript/>
                        <p>JavaScript</p>
                    </span>

                    <span>
                        <SiTypescript/>
                        <p>TypeScript</p>
                    </span>

                    <span>
                        <RiReactjsLine/>
                        <p>React</p>
                    </span>

                    <span>
                        <SiAngular/>
                        <p>Angular</p>
                    </span>

                    <span>
                        <SiStyledcomponents/>
                        <p>Styled</p>
                        <p>Components</p>
                    </span>

                    <span>
                        <SiTailwindcss/>
                        <p>Tailwind</p>
                    </span>

                    <span>
                        <IoLogoNpm/>
                        <p>NPM</p>
                    </span>

                    <span>
                        <ImGit/>
                        <p>Git</p>
                    </span>
            </section>
        </TechStyle>
     );
}
 
export default Techs;