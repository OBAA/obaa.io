import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import '../../../static/css/style.css'

import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
// import ProjectSlider from './components/sections/Portfolio'

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height: "2500px", background:'grey' }}>
                <Landing/>
                <About/>
                <Projects/>

            </div>
        );
    }
}


// export default App;
export default hot(App)
