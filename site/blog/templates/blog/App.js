import React, { Component } from 'react';
import styled from 'styled-components'

import {createMuiTheme} from "@material-ui/core/styles";
import { red, cyan, amber } from '@material-ui/core/colors';
import { hot } from 'react-hot-loader/root';

import '../../../static/css/main.css';

import Header from '../../../templates/base/components/Header';
import Banner from '../../../templates/base/components/Banner';
import Carousel from '../../../templates/base/components/Carousel';
import BlogList from './components/BlogList';
import Categories from './components/Categories';
import Tags from './components/Tags';


    // background: #F0F0F0;
    // background: #2C2C2C;
    // background: #212121;

    // color: 2e7d32
    // color: 22ff22


const muiTheme = createMuiTheme({
    palette: {
        primary: {main: '#F0F0F0'},
        secondary: amber,
    },
    typography: {
        fontFamily: [
            'Anonymous Pro'
        ]
    }
});

const Div = styled.div`
    height: 4000px;
    background: grey;
`;


class App extends Component {

    styles = {
         logo: {
            display: 'flex', flexGrow: 1,
            fontSize: '30px', color: '#F0F0F0'
        },
    };

    render() {
        return (
            <Div>
                <Header styles={this.styles.logo} muiTheme={muiTheme} />
                <Banner title='blog'/>
                {/*<Carousel/>*/}

                <BlogList/>
                <Categories/>
                <Tags/>


            </Div>
        );
    }
}


// export default App;
export default hot(App)
