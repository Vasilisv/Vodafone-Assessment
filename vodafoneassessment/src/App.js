import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/Home";
import Page2 from "./components/page2/Page2";
import './App.css';




class App extends Component {

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/page2" component={Page2}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;
