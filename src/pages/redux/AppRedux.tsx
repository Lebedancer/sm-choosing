import React, { Suspense, lazy } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Board from './routes/Board';
import Dashboard from './routes/Dashboard';
import testSpace from './routes/testSpace';
import style from './style.module.scss';
import { Provider } from 'react-redux';
// import store from './store';
import { store } from './store';
import { getDashboardPlatformComponent } from './routes/lazy-dashBoard/module';

// const lazyDashBoard = lazy(() => {
// const isMobile = true;
// const platformModule = isMobile ? import('./routes/lazy-dashBoard/Dashboard.web/lazy') : import('./routes/lazy-dashBoard/Dashboard.mobile/lazy');
//
// // @ts-ignore
//     return platformModule.then((module) => {
//         store.injectReduxStuff('dashboard', module);
//
//         return module.component;
//     })
// });

const lazyDashBoard = lazy(() => {
// @ts-ignore
    return getDashboardPlatformComponent().then((module) => {
        store.injectReduxStuff('dashboard', module);

        return module.component;
    })
});

class App extends React.Component<any> {
    render() {
        return <Provider store={store}>
            <div className={style.App}>
                <section className={style.nav}>
                    <a href="/">main</a>
                    <a href="/redux/">board</a>
                    <a href="/redux/dashboard">dashboard</a>
                    <a href="/redux/test">test</a>
                </section>
                <Switch>
                    <Route path="/redux/" component={Board} exact/>
                    <Route path="/redux/Dashboard" component={Dashboard}/>
                    <Route path="/redux/test" component={testSpace}/>
                    <Route path="/redux/lazy" component={lazyDashBoard}/>
                </Switch>
            </div>
        </Provider>

    };
}

export default withRouter(App);


