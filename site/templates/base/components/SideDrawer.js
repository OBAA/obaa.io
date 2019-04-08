import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import { scroller } from 'react-scroll';

const SideDrawer = (props) => {
    const scrollToElement = (element) => {
            scroller.scrollTo(element, {
                duration: 1500,
                delay: 100,
                smooth: true
            });
        };

    const switchLocation = (element, href) => {
        console.log(href);
        const location = window.location;
        console.log(location);

        if(element){
            if(location.pathname === '/'){
                scrollToElement(element)
            }
            else {
                window.location.href = location.origin + href
            }
        }
        else {
            window.location.href = location.origin + href
        }
    };

    return (
        <SwipeableDrawer
            anchor="left"
            open={props.open}
            onOpen={()=> props.onOpen(true)}
            onClose={()=> props.onClose(false)} >

            <List component="nav">
                <ListItem button onClick={()=> switchLocation(null, '/')}>
                    Home
                </ListItem>
                <ListItem button onClick={()=> switchLocation(null, '/blog')}>
                    Blog
                </ListItem>
                <ListItem button onClick={()=> switchLocation(null, '/portfolio')}>
                    Portfolio
                </ListItem>
                <ListItem button onClick={()=> switchLocation('Services', '/#Services')}>
                    Services
                </ListItem>
                <ListItem button onClick={()=> switchLocation('ContactMe', '/#ContactMe')}>
                    Contact me
                </ListItem>
            </List>
        </SwipeableDrawer>
    );
};

export default SideDrawer;
