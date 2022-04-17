import {Routes as RoutesDom, Route} from 'react-router-dom';

import FullPages from '../FullPages/FullPages';

const Routes = () => {
    return ( 
        <RoutesDom>
            <Route element={<FullPages/>} path="/" exact/>
        </RoutesDom>
     );
}
 
export default Routes;