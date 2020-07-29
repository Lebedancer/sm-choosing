import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Dashboard from './routes/Dashboard';
import testSpace from './routes/testSpace';
import style from './style.module.scss';
import StoresContext from './context';
import DashboardStore from './stores/dashboardStore';
import { addStore } from './helpers/storeManager';

const dashboardStore = new DashboardStore();
const stores = {
    dashboardStore
}

addStore('dashboardStore', dashboardStore);

class App extends React.Component<any> {
    render() {
        return <StoresContext.Provider value={stores}>
        <div className={style.App}>
            <section className={style.nav}>
                <a href="/">main</a>
                <a href="/mobx/">board</a>
                <a href="/mobx/dashboard">dashboard</a>
                <a href="/mobx/test">test</a>
            </section>
            <Switch>
                <Route path="/mobx/" component={Board} exact/>
                <Route path="/mobx/Dashboard" component={Dashboard}/>
                <Route path="/mobx/test" component={testSpace}/>
            </Switch>
        </div>
        </StoresContext.Provider>
    };
}

export default withRouter(App);


