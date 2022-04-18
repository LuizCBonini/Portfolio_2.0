import React from 'react';
import Header from '../Pages/Header/Header';
import Landing from '../Pages/Landing/Lading';

import { FullPagesStyle } from './FullPagesStyle';

const FullPages = () => {
    return ( 
    <FullPagesStyle>
        <Header/>
        <Landing/>
    </FullPagesStyle> );
}
 
export default FullPages;