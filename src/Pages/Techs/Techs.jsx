import React from 'react';

import { TechStyle } from './TechsSyle';


import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle'

import {ImHtmlFive2, ImCss3, ImGit, ImGithub} from 'react-icons/im'
import {IoLogoJavascript, IoLogoNpm} from 'react-icons/io'
import {RiReactjsLine} from 'react-icons/ri'
import {SiStyledcomponents, SiSwiper} from 'react-icons/si'

const Techs = (BGImage) => {
    return ( 
        <TechStyle id='skills' >
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
{/*                 
                <img src={BgImage} alt=""/> */}

                <svg viewBox="0 0 1382 641" shapeRendering="geometricPrecision" textRendering="geometricPrecision">

                    <path className="bg1" d="M1390.810046,8.972373C1251.627318,226.933197,531.549841,540.05665,20.678952,662.860276l1370.131094,8.426389v-662.314292Z" transform="matrix(1.892373 0 0 1.594107-644.531835-385.781885)" fill="#a198ff" strokeWidth="2.764"/>

                    <path className="bg2" d="M1390.810046,8.972373C1251.627318,226.933197,531.549841,540.05665,20.678952,662.860276l1370.131094,8.426389v-662.314292Z" transform="matrix(1.471889 0.023095-.022512 1.434735-275.257106-310.918807)" fill="#5b4cff" strokeWidth="2.764"/>

                    <path className="bg3" d="M1390.810046,8.972373C1251.627318,226.933197,531.549841,540.05665,20.678952,662.860276l1370.131094,8.426389v-662.314292Z" transform="matrix(1.414662 0.049017-.059751 1.724449-49.098841-489.044536)" fill="#1802ff" strokeWidth="2.764"/>

                </svg>
            </section>
        </TechStyle>
     );
}
 
export default Techs;