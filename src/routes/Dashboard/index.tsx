import React from 'react';
import style from './style.module.scss';
import DashboardItem from '../../components/DashboardItem';
import Store, { IStore } from './Store';
import {observer} from "mobx-react";

class Index extends React.Component<any> {
    private store: IStore;

    constructor(props: any) {
        super(props);

        this.store = new Store();

    }

    renderList() {
        const { list, loading } = this.store;

        if (loading) {
            return <div>Loading....</div>
        }

        return list.map(item => <DashboardItem {...item} />)

    }
    render() {
        return <div className={style.dashboard}>
            <aside className={style.sidebar}/>
            <div className={style.content}>
                {this.renderList()}
            </div>
        </div>
    };
}

export default observer(Index);