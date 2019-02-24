import React from 'react';

import Carousel from '../../../../templates/base/components/Carousel'

const Projects = () => {
    return (
        <div className="technologies" style={{height: `${window.innerHeight}px`}}>

            <div style={{height:'190px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="font_montserrat" style={{fontSize: '35px', fontWeight: 300}}>
                    Recent Projects
                </div>
            </div>
            <div className="body">
                <Carousel/>
            </div>
        </div>
    );
};

export default Projects;
