import React from 'react';
import { useFusionContext } from 'fusion:context';
import getThemeStyle from 'fusion:themes';
import getProperties from 'fusion:properties';
import './default.scss'

const Theme = (props) => {
    const { globalContent, arcSite } = useFusionContext();

    console.log(getThemeStyle(arcSite), "getThemeStyle");
    console.log(getProperties(arcSite), "getProperties");

    return(
        <div>
        </div>
    )
}

export default Theme;