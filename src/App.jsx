import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from './Style/GlobalStyle';

import Routes from './Routes/Routes';



const App = () => {
  return ( 
    <BrowserRouter>
      <Routes/>
      <GlobalStyle/>
    </BrowserRouter>
   );
}
 
export default App;