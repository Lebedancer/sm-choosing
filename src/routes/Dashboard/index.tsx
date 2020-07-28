import React, {Suspense, Fragment } from 'react';
import style from './style.module.scss';
import { DashboardStoreContext } from './Store';
import {observer} from "mobx-react";

const DashboardMobile = React.lazy(() => import('./Dashboard.mobile'));
const DashboardWeb = React.lazy(() => import('./Dashboard.web'));

class Index extends React.Component<any> {
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
        return (
            <DashboardStoreContext.Consumer>
                {(store) => (
                    <Fragment>
                        {store.canShowMobile ? this.renderMobileView() : this.renderWebView()}
                    </Fragment>
                )}
            </DashboardStoreContext.Consumer>
        )
    };
}

export default observer(Index);
