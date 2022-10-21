import React from 'react';
import { AboutStyle } from './AboutStyle';

import Button from '../../assets/Components/Button/Button';

import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

import video from '../../assets/img/maos_programando.mp4'
import mask from '../../assets/img/mask.jpg'
import CV from '../../assets/Luiz Carlos Bonini-dev C.V.pdf'

const About = () => {
    return ( 
        <AboutStyle id='about'>
            
            <SectionTitle subTitle={"Um pouco mais sobre mim"} Title={"Sobre"}/>

            <section>
                <div className='video'>
                    <video src={video} autoPlay loop muted type="mp4" alt="video of hands developing a program"></video>
                    <img src={mask} alt="mask for the video" />
                </div>

                <div className='content'>
                    <h2>Você já descobriu algo novo sobre si mesmo hoje?</h2>
                    <p>
                        Estou estudando <span>React</span> e <span>Next.js</span> por conta própria, iniciei minha trajetória em <span>programação web</span> a <span>mais de um ano</span> e estou aprendendo muito cada dia mais.
                        <br/>
                        Atualmente sou <span>Programador Front-end Junior</span> em uma empresa que vem agregado muito ao meu crescimento e aprendizado.
                        <br/>
                        Programação desperta totalmente minhas paixões, e reviveu a curiosidade que me fez aprender <span>Photoshop</span> na adolescência como <span>autodidata</span>.
                        <br/>
                        Toda vez que escrevo uma linha de código em JS, leio um livro ou entendo mais sobre como é ser um desenvolvedor, descubro algo novo em mim, sinto que estou me conhecendo mais.
                    </p>

                    <a href={CV} target="_blank"><Button>Download C.V</Button></a>
                </div>
            </section>

            
            


        </AboutStyle>
     );
}
 
export default About;