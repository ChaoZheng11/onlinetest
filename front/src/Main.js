import React, { Component } from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom' 

import Home from './Home'
import Add from './Add'
import Update from './Update'
 
class Main extends Component {
    render() { 
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/add" component={Add}/>
                <Route path="/update" component={Update}/>
            </Router>
        );
    }
}
 
export default Main;