import React from 'react';
import style from './style.module.scss';
import DashboardItem from './components/DashboardItem';
import {observer} from "mobx-react";

class Index extends React.Component<any> {
    renderList() {
        const { list, loading } = this.props;

        if (loading) {
            return <div>Loading....</div>
        }

        return list.map((item: any) => <DashboardItem {...item} />)

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