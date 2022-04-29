import React from 'react';

import { SectionTitleStyle } from './SectionTitleStyle';

const SectionTitle = ({subTitle, Title}) => {
    return ( 
        <SectionTitleStyle>
            <span>{subTitle}</span>
            <h2>{Title}</h2>
        </SectionTitleStyle>
     );
}
 
export default SectionTitle;