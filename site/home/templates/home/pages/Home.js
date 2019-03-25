import React, { Component } from 'react';

import Landing from '../components/Landing'
import About from '../components/About'
// import ContactMe from '../components/ContactMe'
import ContactMe_ from '../components/ContactMe_'
import Services from "../components/Services";
import RecentWorks from "../components/RecentWorks";

class Home extends Component {

    render() {
        return (
            <div>
                <Landing/>
                <About/>
                <RecentWorks/>
                <Services/>
                {/*<ContactMe/>*/}
                <ContactMe_/>
            </div>
        );
    }
}


export default Home;
