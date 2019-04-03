import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class PostOffice extends Component {
    state = {
        response: {
            message: {
                title: '',
                content: '',
            },
            status: 0,
        },
        open: false
    };

    /**
     * Outputs the following:
     *
     * UNSENT: 0
     * OPENED: 0
     * LOADING: 200
     * DONE: 200
     */

    postIt = (url, data) => {
        console.log("Posting...");

        const request = new XMLHttpRequest();
        const csrfToken = window.props.csrfToken;

        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                const response = JSON.parse(request.responseText);

                switch(request.status){
                    case(200):
                        // Request was Successful
                        this.setState({
                            response: {
                                message: {
                                    title: response.message.title,
                                    content: response.message.content,
                                },
                                status: request.status,
                            },
                            open: true
                        });
                        break;

                    default:
                        // Request was unSuccessful
                        this.setState({
                            response: {
                                message: {
                                    title: 'Something went wrong!',
                                    content: 'Something happened somewhere. Please try again some other time.',
                                },
                                status: request.status,
                            },
                            open: true
                        });
                        break;
                }

            }
        };
        request.open('POST', url, true); // Open a new Request.
        request.setRequestHeader("Accept", "application/json");
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.setRequestHeader("X-CSRFToken", csrfToken);
        request.send(JSON.stringify(data));
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handlePost = (url, data, post) => {
        console.log("Handling Post");
        const responseStatus = this.state.response.status;

        if (post && responseStatus === 0) {
            this.postIt(url, data)
        }

        console.log("Posted");
        console.log(this.state.response);
    };


    render() {
        const {url, data, post} = this.props;
        const message = this.state.response.message;
        const drawerOpen = this.state.open;

        // If props.post is true handlePost
        post ? this.handlePost(url, data, post) : null;

        return (
            <div>
                <Dialog
                    open={drawerOpen}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {message.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {message.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default PostOffice;
