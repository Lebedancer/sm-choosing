import React, {Suspense, Fragment } from 'react';
import style from './style.module.scss';
import Store, { IStore } from './Store';
import {observer} from "mobx-react";

const DashboardMobile = React.lazy(() => import('./Dashboard.mobile'));
const DashboardWeb = React.lazy(() => import('./Dashboard.web'));

class Index extends React.Component<any> {
    private store: IStore;

    constructor(props: any) {
        super(props);

        this.store = new Store();
    }

    renderWebView() {
        return <Suspense fallback={<div>Loading...</div>}>
            <DashboardWeb />
        </Suspense>
    }

    renderMobileView() {
        return <Suspense fallback={<div>Loading...</div>}>
            <DashboardMobile />
        </Suspense>
    }

    render() {
        const { canShowMobile } = this.store;
        return <Fragment>
            {canShowMobile ? this.renderMobileView() : this.renderWebView()}
        </Fragment>
    };
}

export default observer(Index);