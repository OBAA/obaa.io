import React, { Component } from 'react';

import About from '.././components/About'
import Banner from "../../../../templates/base/components/Banner";
import Jobs from "../components/Jobs";
import ContactMe from "../components/ContactMe";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Banner title='portfolio'/>
                <About/>
                <Jobs/>
                <ContactMe/>

            </div>
        );
    }
}


export default Portfolio;
