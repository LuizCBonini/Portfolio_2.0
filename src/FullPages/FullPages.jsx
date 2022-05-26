import React, { useState } from 'react';


import MenuMobile from '../assets/Components/MenuMobile/MenuMobile';

import Header from '../Pages/Header/Header';
import Landing from '../Pages/Landing/Lading';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Projects';
import Techs from '../Pages/Techs/Techs';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Pages/Footer/Footer';

import { FullPagesStyle } from './FullPagesStyle';

const FullPages = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return ( 
    <>
        <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}/>
        <FullPagesStyle>
            
            <Header setMenuIsVisible={setMenuIsVisible}/>
            <Landing/>
            <About/>
            <Projects/>
            <Techs/>
            <Contact/>
            <Footer/>
        </FullPagesStyle> 
    </>
    );
}
 
export default FullPages;