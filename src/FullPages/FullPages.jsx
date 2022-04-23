import React from 'react';
import Header from '../Pages/Header/Header';
import Landing from '../Pages/Landing/Lading';
import About from '../Pages/About/About';

import { FullPagesStyle } from './FullPagesStyle';

const FullPages = () => {
    return ( 
    <FullPagesStyle>
        <Header/>
        <Landing/>
        <About/>
    </FullPagesStyle> );
}
 
export default FullPages;