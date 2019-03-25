import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, cyan, amber } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer'


const theme = createMuiTheme({
    palette: {
        primary: {main: '#22ff22'},
        secondary: amber,
        error: red,
    },
    typography: {
        fontFamily: [
            'Anonymous Pro'
        ]
    }
});

class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false,
    };

    styles = {
        header_logo: {
            display: 'flex', flexGrow: 1,
            fontSize: '30px', color: '#003f39'
        },
    };

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        // console.log("User scrolling");
        if(window.scrollY > 10){
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

                    <MuiThemeProvider theme={theme}>
                        <Button color="primary" href='/'>Home</Button>
                        <Button color="primary" href='/blog'>Blog</Button>
                        <Button color="primary" href='/portfolio'>Portfolio</Button>
                        <Button color="primary">Services</Button>
                    </MuiThemeProvider>

                    <MuiThemeProvider theme={theme}>
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

export default Header
