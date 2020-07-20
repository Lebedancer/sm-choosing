import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Dashboard from './routes/Dashboard';
import style from './style.module.scss';

class App extends React.Component<any> {
    render() {
        return <div className={style.App}>
            <section className={style.nav}>
                <a href="#/">main</a>
                <a href="#/dashboard">dashboard</a>
            </section>
            <Switch>
                <Route path="/" component={Board} exact/>
                <Route path="/Dashboard" component={Dashboard}/>
            </Switch>
        </div>
    };
}

export default withRouter(App);


