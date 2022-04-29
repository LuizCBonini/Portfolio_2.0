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
            CardTitle={"Teste de card"} 
            CardDescription={"Hi Kevin, It'll be great if you can i wold be like animal unstopobaale the game o the year is ssjdk make video related to"}
            CardImg={`${cardImage}`}/>
        </ProjectStyle>
     );
}
 
export default Projects;