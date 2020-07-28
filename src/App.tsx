import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Dashboard from './routes/Dashboard';
import testSpace from './routes/testSpace';
import style from './style.module.scss';
import { initBoardLogger, initDashboardLogger } from './services/logger';
import { Store, DashboardStoreContext } from './routes/Dashboard/Store';

initBoardLogger()
initDashboardLogger()

class App extends React.Component<any> {
    render() {
        return <div className={style.App}>
            <section className={style.nav}>
                <a href="#/">main</a>
                <a href="#/dashboard">dashboard</a>
                <a href="#/test">test</a>
            </section>
            <Switch>
                <Route path="/" component={Board} exact/>
				<DashboardStoreContext.Provider value={new Store()}>
					<Route path="/Dashboard" component={Dashboard}/>
				</DashboardStoreContext.Provider>
                <Route path="/test" component={testSpace}/>
            </Switch>
        </div>
    };
}

export default withRouter(App);
