import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Dashboard from './routes/Dashboard';
import './App.css';

class App extends React.Component<any> {
    render() {
        return <div className="App">
            <Switch>
                <Route path="/" component={Board} exact/>
                <Route path="/Dashboard" component={Dashboard}/>
            </Switch>
        </div>
    };
}

export default withRouter(App);


