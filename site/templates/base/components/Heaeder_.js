import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';


class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false,
    };

    styles = this.props.styles;

    muiTheme = this.props.muiTheme;

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        if(window.scrollY > 5000){
            this.setState({
                headerShow: true
            })
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
                    <div className="font_roboto" style={this.styles.header_logo}>OBAA.IO</div>

                    <MuiThemeProvider theme={this.muiTheme}>
                        <Button color="primary" href='/'>Home</Button>
                        <Button color="primary" href='/blog'>Blog</Button>
                        <Button color="primary" href='/portfolio'>Portfolio</Button>
                        <Button color="primary">Services</Button>
                    </MuiThemeProvider>

                    <MuiThemeProvider theme={this.muiTheme}>
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
