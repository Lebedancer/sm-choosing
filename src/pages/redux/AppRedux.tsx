import React, { lazy } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import style from './style.module.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { getDashboardPlatformComponent } from './routes/DashBoard/module';
import {DASHBOARD_LOADING} from "./routes/DashBoard/Dashboard.web/actions/types";

// ? another approach to load lazy views(more verbose)
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
        store.dispatch({type: DASHBOARD_LOADING});

        return module.component;
    })
});

const lazyBoard = lazy(() => {
// @ts-ignore
    return import('./routes/Board/lazy').then((module) => {

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
                </section>
                <Switch>
                    <Route path="/redux/" component={lazyBoard} exact/>
                    <Route path="/redux/Dashboard" component={lazyDashBoard}/>
                </Switch>
            </div>
        </Provider>

    };
}

export default withRouter(App);


