import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';

const Routed = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

// Client side routing used.

// ReactDOM.render(<NewPage {...window.props}/>, window.react_mount)
// ReactDOM.render(<App />, document.getElementById('home'));

ReactDOM.render(<Routed/>, window.react_mount);
