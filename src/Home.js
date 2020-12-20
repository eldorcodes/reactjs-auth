import React, {Component} from 'react';
import app from './base';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            admin: ''
        }
    }
    render(){
        return (
            <Router>
                <div className="container">
                    <h1>Home Page</h1>
                    <button onClick={() => app.auth().signOut()}>Logout</button>
                </div>
                <Switch>
                    <Route exact path="/login" >
                        <Login/>
                    </Route>
                    <Route exact  path="/signup"  >
                        <Signup/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}