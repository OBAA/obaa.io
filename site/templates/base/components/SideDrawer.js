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
            onClose={()=> props.onClose(false)} >

            <List component="nav">
                <ListItem button onClick={()=> console.log("Home")}>
                    Home
                </ListItem>
                <ListItem button onClick={()=> console.log("Projects")}>
                    Projects
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
