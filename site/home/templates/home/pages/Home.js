import React, { Component } from 'react';

import {Element} from 'react-scroll'


import Landing from '../components/Landing'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Services from "../components/Services";
import RecentWorks from "../components/RecentWorks";

class Home extends Component {

    render() {
        return (
            <div>
                <Landing/>
                <About/>
                <RecentWorks/>
                <Element name="Services">
                    <Services/>
                </Element>
                <Element name="ContactMe">
                    <ContactMe/>
                </Element>
            </div>
        );
    }
}


export default Home;
