import React, { Component } from 'react';
import styled from 'styled-components'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import SideDrawer from './SideDrawer'
import Auth from './Auth'
import {amber} from "@material-ui/core/colors/index";


const NavButtons = styled.div`
    display: flex;
    align-content: center;
    @media (max-width: 768px) {
        display: none;
    } 
`;

class Header extends Component {
    state = {
        auth: window.props.auth,

        drawerOpen: false,
        headerShow: false,

        anchorEl: null,

        theme: this.props.muiTheme,
        logo: this.props.styles,
    };

    styles = {
        logo: {
            display: 'flex', flexGrow: 1,
            fontSize: '30px', color: '#22ff22'
        }
    };

    muiTheme = createMuiTheme({
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

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        if(window.scrollY > 20){
            this.setState({
                headerShow: true
            });
        } else {
            this.setState({
                headerShow: false
            })
        }
    };

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    };


// Teal Green: 003f39 Dark: 212121 Green: 22ff22
    render(){
        return (
            <AppBar
                position={"fixed"}
                style={{
                    backgroundColor: this.state.headerShow ? '#212121' : 'transparent',
                    boxShadow: this.state.headerShow ? true : 'none',
                }}
            >
                <Toolbar>
                    <div className="font_roboto" style={this.state.logo}>OBAA.IO</div>

                    <NavButtons>
                        <MuiThemeProvider theme={this.state.theme}>
                            <Button color="primary" href='/'>Home</Button>
                            <Button color="primary" href='/blog'>Blog</Button>
                            <Button color="primary" href='/portfolio'>Portfolio</Button>
                            <Button color="primary">Services</Button>
                        </MuiThemeProvider>
                    </NavButtons>

                    {/*${auth ? null : <Auth/>}*/}
                    <Auth theme={this.state.theme}/>

                    <MuiThemeProvider theme={this.state.theme}>
                        <IconButton
                            aria-label="Menu"
                            color="primary"
                            onClick={()=> this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </MuiThemeProvider>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={()=> this.toggleDrawer(false)}
                    />

                </Toolbar>
            </AppBar>

        )
    }
}

// const theme = createMuiTheme({
//     palette: {
//         primary: {main: '#22ff22'},
//         secondary: amber,
//         error: red,
//     },
//     typography: {
//         fontFamily: [
//             'Anonymous Pro'
//         ]
//     }
// });

export default Header
