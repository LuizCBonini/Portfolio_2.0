import React from 'react';

import { ProjectStyle } from './ProjectsStyle';

// SectionTitle criado para o reaproveitamento de código.
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';
import Card from '../../assets/Components/Card/Card';

import HealthyImage from '../../assets/img/Home.png'
import ChokoImage from '../../assets/img/chokolatte.png'
import PortImage from '../../assets/img/PortfolioHome.png'


const Projects = () => {
    return ( 
        <ProjectStyle id='projects'>
            <SectionTitle subTitle={"Meus trabalhos"} Title={"Projetos"}/>

            <div className='cards'>
                <Card
                CardTitle={"Healthy Food"}
                CardDescription={"Promovendo o compartilhamento de receitas saudáveis"}
                CardImg={`${HealthyImage}`}/>

                <Card
                CardTitle={"Chokolatte"}
                CardDescription={"Site criado para uma empresa fictícia de chocolate"}
                CardImg={`${ChokoImage}`}/>

                <Card
                CardTitle={"Portfólio"}
                CardDescription={"Meu próprio portfólio, que serviu para aprender muito mais sobre React"}
                CardImg={`${PortImage}`}/>
            </div>

        </ProjectStyle>
     );
}
 
export default Projects;