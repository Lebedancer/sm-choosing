import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Grid from './routes/Grid';
import Settings from './routes/Settings';
import './App.css';

class App extends React.Component<any> {
    render() {
        return <div className="App">
            <Switch>
                <Route path="/" component={Board} exact/>
                <Route path="/Grid" component={Grid}/>
                <Route path="/Settings" component={Settings}/>
            </Switch>
        </div>
    };
}

export default withRouter(App);


