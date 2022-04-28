import React from 'react';
import Header from '../Pages/Header/Header';
import Landing from '../Pages/Landing/Lading';
import About from '../Pages/About/About';

import { FullPagesStyle } from './FullPagesStyle';
import Projects from '../Pages/Projects/Projects';

const FullPages = () => {
    return ( 
    <FullPagesStyle>
        <Header/>
        <Landing/>
        <About/>
        <Projects/>
    </FullPagesStyle> );
}
 
export default FullPages;