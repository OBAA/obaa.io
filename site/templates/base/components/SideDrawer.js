import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <SwipeableDrawer
            anchor="left"
            open={props.open}
            onOpen={()=> props.onOpen(true)}
            onClose={()=> props.onClose(false)} >

            <List component="nav">
                <ListItem button onClick={()=> console.log("Home")}>
                    <a href='/'>Home</a>
                </ListItem>
                <ListItem button onClick={()=> console.log("Home")}>
                    <a href='/blog'>Blog</a>
                </ListItem>
                <ListItem button onClick={()=> console.log("Projects")}>
                    <a href='/portfolio'>Portfolio</a>
                </ListItem>
                <ListItem button onClick={()=> console.log("Services")}>
                    Services
                </ListItem>
                <ListItem button onClick={()=> console.log("Contact me")}>
                    Contact me
                </ListItem>
            </List>
        </SwipeableDrawer>
    );
};

export default SideDrawer;
