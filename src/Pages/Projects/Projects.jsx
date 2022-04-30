import React from 'react';

import { ProjectStyle } from './ProjectsStyle';

// SectionTitle criado para o reaproveitamento de código.
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';
import Card from '../../assets/Components/Card/Card';

import cardImage from '../../assets/img/Home.png'


const Projects = () => {
    return ( 
        <ProjectStyle id='projects'>
            <SectionTitle subTitle={"Meus trabalhos"} Title={"Projetos"}/>

            <Card 
            CardTitle={"Healthy Food"} 
            CardDescription={"Promovendo o compartilhamento de receitas saudáveis"}
            CardImg={`${cardImage}`}/>

        </ProjectStyle>
     );
}
 
export default Projects;