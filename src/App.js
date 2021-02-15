import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
        </Route>
       <Route path="/about"><About /> </Route>
      </Switch>  
    </Router>

  );
}

export default App;
