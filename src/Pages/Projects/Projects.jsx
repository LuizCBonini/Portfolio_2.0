import React, { useState } from 'react';

import { ProjectStyle } from './ProjectsStyle';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// SectionTitle criado para o reaproveitamento de código.
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

// Imagens dos cards
import HealthyFood from '../../assets/img/HealthyFood.png'
import Alurapic from '../../assets/img/alurapic.png'
import PortImage from '../../assets/img/PortfolioHome.png'
import Crypto from '../../assets/img/Crypto.png'
import Memoteca from '../../assets/img/memoteca.png'

// Components:
import CardProjects from '../../assets/Components/CardProject/CardProject';

// SVGs
import AngularImg from '../../assets/img/angular.svg'
import VueImg from '../../assets/img/vue.svg'
import ReactImg from '../../assets/img/react.svg'
import Button from '../../assets/Components/Button/Button';


const Projects = () => {

  const [busca, setBusca] = useState('');
  const [showBusca, setShowBusca] = useState('');


  const Projetos = [
    {
      id: 1,
      tech: 'Vue',
      Titulo: "Cryptomoedas",
      Description: 'Website com atualizações em tempo real dos valores de 5 criptomoedas (Bitcoin, Ethereum, Cosmos Hub, Luna e Dacxi), consumindo uma API.',
      LinkRepositorio: 'https://github.com/LuizCBonini/Cryptocurrencies',
      LinkSite: 'https://luiz-cryptocurrencies.netlify.app',
      TechIcon: VueImg,
      Image: Crypto

    },
    {
      id: 2,
      tech: 'React',
      Titulo: "Portfólio",
      Description: 'Meu próprio portfólio, que serviu para aprender muito mais sobre React',
      LinkRepositorio: 'https://github.com/LuizCBonini/Portfolio_2.0',
      LinkSite: 'https://luiz-bonini.netlify.app',
      TechIcon: ReactImg,
      Image: PortImage

    },
    {
      id: 3,
      tech: 'React',
      Titulo: "Healthy Food",
      Description: 'Com uma Api para auto completar dados do formulário de cadastro e guardar no LocalStorage',
      LinkRepositorio: 'https://github.com/LuizCBonini/gcb-healthyfood-teste',
      LinkSite: 'https://healthy-food-luiz-bonini-gcb.netlify.app',
      TechIcon: ReactImg,
      Image: HealthyFood

    },
    {
      id: 4,
      tech: 'Angular',
      Titulo: "Alurapic",
      Description: 'Projeto de um site para postagem de fotos criado na aula de Angular da Alura.',
      LinkRepositorio: 'https://github.com/LuizCBonini/Alura-Angular',
      LinkSite: '',
      TechIcon: AngularImg,
      Image: Alurapic

    },
    {
      id: 5,
      tech: 'Angular',
      Titulo: "Memoteca",
      Description: 'Projeto de um site para postagem de frases curtas, criado na aula de Angular da Alura.',
      LinkRepositorio: 'https://github.com/LuizCBonini/Alura-Memoteca',
      LinkSite: '',
      TechIcon: AngularImg,
      Image: Memoteca

    }
  ]

  const buscaProjeto = Projetos.filter((projeto) => projeto.tech.includes(busca));

    return ( 
        <ProjectStyle id='projects'>
            <SectionTitle subTitle={"Meus trabalhos"} Title={"Projetos"}/>
            
            <Button
              className="buscador"
              onPress={() => setShowBusca('active')}>Buscar</Button>
            <div className={`busca ${showBusca}`}>
              <span>
                <img
                  onClick={() => {setBusca('React'); setShowBusca('')}}
                  className='busca_button'
                  src={ReactImg}
                  alt="" />
                <img
                  onClick={() => {setBusca('Vue'); setShowBusca('')}}
                  className='busca_button'
                  src={VueImg}
                  alt="" />
                <img
                  onClick={() => {setBusca('Angular'); setShowBusca('')}}
                  className='busca_button'
                  src={AngularImg}
                  alt="" />
                <Button onPress={() => {setBusca(''); setShowBusca('')}}>Limpar</Button>
              </span>
            </div>

            <div className='cards'>
              <h1>{busca ? `${busca}` : 'Todos os projetos'}</h1>

                <Swiper
                // slidesPerView={buscaProjeto.length > 1 ? 2 : 1}
                slidesPerView={buscaProjeto.length > 2 ? 'auto' : (buscaProjeto.length > 1 ? 2 : 1)}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className="mySwiper"
                >
                      {
                        buscaProjeto.map((projeto) => (
                          <SwiperSlide key={projeto.id}>
                            <CardProjects
                              tech={projeto.tech}
                              Titulo={projeto.Titulo}
                              Description={projeto.Description}
                              LinkRepositorio={projeto.LinkRepositorio}
                              LinkSite={projeto.LinkSite}
                              TechIcon={projeto.TechIcon}
                              Image={projeto.Image}
                            />
                          </SwiperSlide>
                        ))
                      }
                </Swiper>

            </div>

        </ProjectStyle>
     );
}
 
export default Projects;