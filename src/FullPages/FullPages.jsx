import React from 'react';
import Header from '../Pages/Header/Header';
import Landing from '../Pages/Landing/Lading';
import About from '../Pages/About/About';

import { FullPagesStyle } from './FullPagesStyle';
import Projects from '../Pages/Projects/Projects';
import Techs from '../Pages/Techs/Techs';
import Contact from '../Pages/Contact/Contact';

const FullPages = () => {
    return ( 
    <FullPagesStyle>
        <Header/>
        <Landing/>
        <About/>
        <Projects/>
        <Techs/>
        <Contact/>
    </FullPagesStyle> );
}
 
export default FullPages;