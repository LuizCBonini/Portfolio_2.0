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
import {IoLogoVue} from 'react-icons/io5'
import {RiReactjsLine} from 'react-icons/ri'
import {SiStyledcomponents, SiSwiper, SiTailwindcss} from 'react-icons/si'

const Techs = (BGImage) => {
    return ( 
        <TechStyle id='skills' >
            <SectionTitle subTitle={"O que eu estudo e ando me aprimorando"} Title={"Tecnologias"}/>

            <section>
                <Swiper
                    // slidesPerView={4}
                    breakpoints={{
                        // when window width is >= 300px
                        300: {
                        slidesPerView: 3,
                        spaceBetween: 100,
                        },
                        // when window width is >= 460px
                        460: {
                        slidesPerView: 5,
                        spaceBetween: 100,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <span>
                            <ImHtmlFive2/>
                            <p>HTML</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <ImCss3/>
                            <p>CSS</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <IoLogoJavascript/>
                            <p>JavaScript</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <RiReactjsLine/>
                            <p>React</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <IoLogoVue/>
                            <p>Vue</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <SiStyledcomponents/>
                            <p>Styled</p>
                            <p>Components</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <SiTailwindcss/>
                            <p>Tailwind</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <IoLogoNpm/>
                            <p>NPM</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <ImGit/>
                            <p>Git</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <ImGithub/>
                            <p>Github</p>
                        </span>
                    </SwiperSlide>

                    <SwiperSlide>
                        <span>
                            <SiSwiper/>
                            <p>Swiper</p>
                        </span>
                    </SwiperSlide>
                    
                </Swiper>
                
            </section>
        </TechStyle>
     );
}
 
export default Techs;