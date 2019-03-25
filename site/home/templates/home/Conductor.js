import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'


// Conductor handles in App page routing
// using React-Router as opposed to server side routing.

const Conductor = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      {/*<Route path='/portfolio' component={Portfolio}/>*/}
    </Switch>
  </main>
);

export default Conductor
