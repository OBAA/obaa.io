import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'

import Header from '../../../templates/base/components/Header';
import {amber} from "@material-ui/core/colors/index";
import {createMuiTheme} from "@material-ui/core/styles/index";
import styled from "styled-components";

import Conductor from './Conductor'
import Footer from '../../../templates/base/components/Footer'

    // background: #F0F0F0;
    // background: #2C2C2C;
    // background: #212121;

    // color: 2e7d32
    // color: 22ff22

const muiTheme = createMuiTheme({
    palette: {
        primary: {main: '#22ff22'},
        secondary: amber,
    },
    typography: {
        fontFamily: ['Anonymous Pro']
    }
});

const Div = styled.div`
    background: grey;
`;

class App extends Component {
    styles = {
         logo: {
            display: 'flex', flexGrow: 1,
            fontSize: '30px', color: '#22ff22'
        },
    };

    render() {
        return (
            <Div>
                <Header styles={this.styles.logo} muiTheme={muiTheme} />
                <Conductor/>

                <Footer/>
            </Div>
        );
    }
}

export default hot(App)
