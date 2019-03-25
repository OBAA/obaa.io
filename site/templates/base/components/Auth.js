import React, {Component} from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';


class Auth extends Component {
    state = {
        auth: window.props.auth,
        anchorEl: null,
    };

    style = {
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const props = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <MuiThemeProvider theme={props.theme}>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="primary"
                    >
                        <AccountCircle />
                    </IconButton>
                </MuiThemeProvider>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                    style={this.style.menuButton}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <Divider/>
                    <MenuItem onClick={this.handleClose}>{auth ? 'Logout' : 'Login'}</MenuItem>
                </Menu>
            </div>
        );
    }
}

// Auth.propTypes = {};

export default Auth;