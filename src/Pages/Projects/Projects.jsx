import React from 'react';

import { ProjectStyle } from './ProjectsStyle';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// SectionTitle criado para o reaproveitamento de código.
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';
import Card from '../../assets/Components/Card/Card';

// Imagens dos cards
import HealthyImage from '../../assets/img/Home.png'
import ChokoImage from '../../assets/img/chokolatte.png'
import PortImage from '../../assets/img/PortfolioHome.png'
import MenuCoffeeImage from '../../assets/img/Menucoffee.png'
import TodoListImage from '../../assets/img/Todo.png'
import EmProduçãoImage from '../../assets/img/Emprodução.png'


const Projects = () => {
    return ( 
        <ProjectStyle id='projects'>
            <SectionTitle subTitle={"Meus trabalhos"} Title={"Projetos"}/>

            <div className='cards'>

                <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                >

                    <SwiperSlide>
                        <Card
                        CardTitle={"Healthy Food"}
                        CardDescription={"Promovendo o compartilhamento de receitas saudáveis"}
                        CardImg={`${HealthyImage}`}
                        linkGithub={"https://github.com/LuizCBonini/gcb-healthyfood-teste"}
                        linkSite={"https://healthy-food-luiz-bonini-gcb.netlify.app/"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"Chokolatte"}
                        CardDescription={"Site criado para uma empresa fictícia de chocolate"}
                        CardImg={`${ChokoImage}`}
                        linkGithub={"https://github.com/LuizCBonini/Website-Chocolate"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"Portfólio"}
                        CardDescription={"Meu próprio portfólio, que serviu para aprender muito mais sobre React"}
                        CardImg={`${PortImage}`}
                        linkGithub={"https://github.com/LuizCBonini/Portfolio_2.0"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"Menu Cafeteria"}
                        CardDescription={"Site criado para a leitura de QRCode pelos clientes no estabelecimento."}
                        CardImg={`${MenuCoffeeImage}`}
                        linkGithub={"https://github.com/LuizCBonini/Menu_Cafeteria"}
                        linkSite={"https://suplicy-campinas.netlify.app/"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"To do list"}
                        CardDescription={"Estudo de React para adicionar, remover e marcar como feita uma tarefa."}
                        CardImg={`${TodoListImage}`}
                        linkGithub={"https://github.com/LuizCBonini/curso-react"}
                        linkSite={"https://reactlist-to-do.netlify.app/"}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"Em produção"}
                        CardDescription={"Logo um novo site em React estará aqui."}
                        CardImg={`${EmProduçãoImage}`}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                        CardTitle={"Em produção"}
                        CardDescription={"Logo um novo site em React estará aqui."}
                        CardImg={`${EmProduçãoImage}`}/>
                    </SwiperSlide>
                </Swiper>

            </div>

        </ProjectStyle>
     );
}
 
export default Projects;