import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import AppMobx from './pages/mobx/AppMobx';
import Main from './pages/main/Main';
import AppRedux from './pages/redux/AppRedux';
import style from './style.module.scss';

class App extends React.Component<any> {
    render() {
        return <div className={style.App}>
            <Switch>
                <Route path="/" component={Main } exact/>
                <Route path="/mobx" component={AppMobx}/>
                <Route path="/redux" component={AppRedux}/>
            </Switch>
        </div>
    };
}

export default withRouter(App);


