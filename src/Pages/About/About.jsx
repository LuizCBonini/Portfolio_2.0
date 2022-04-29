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
                        Estou cursando <span>JavaScript</span> e <span>React</span> por conta própria, iniciei minha trajetória em <span>Front-End</span> a alguns meses e estou aprendendo muito cada dia mais.
                        <br/>
                        Programação desperta totalmente minhas paixões, e reviveu a curiosidade que me fez aprender <span>Photoshop</span> na adolescência como autodidata.
                        <br/>
                        Toda vez que escrevo uma linha de código em JS, leio um livro ou entendo mais sobre como é ser um desenvolvedor, descubro algo novo em mim também, sinto que estou me conhecendo mais.
                    </p>

                    <Button link={CV}>Download C.V</Button>
                </div>
            </section>

            
            


        </AboutStyle>
     );
}
 
export default About;