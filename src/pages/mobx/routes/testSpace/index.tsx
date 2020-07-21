import React, {Suspense, Fragment } from 'react';
import style from './style.module.scss';
import {observer} from "mobx-react";
import perfStore from "./perfStore";
import AutoIncrementItem from "./components/AutoIncrementItem";
import DeepDataTest from "./components/DeepDataTest";
import Button from "../../../../components/Button";

class Index extends React.Component<any> {
    renderUiTest() {
        const { autoIncrementCount } = perfStore;
        const list: any[] = [];

        for (let i = 0; i <= autoIncrementCount; i++ ) {
            list.push(<AutoIncrementItem store={perfStore} /> );
        }

        return <div className={style.testSection}>
            <div className={style.tip}>Test shows how fast mobx will render changes in dozen components from single store</div>
            <section className={style.testSectionList}>
                {list}
            </section>
            <section>
                <Button onClick={() => perfStore.toggleIncrement()}>Start/stop</Button>
            </section>
        </div>
    }

    renderStoreMemoryTest() {
        return <div>
            <DeepDataTest />
        </div>;
    }

    render() {
        return <div>
            {this.renderUiTest()}
            <hr/>
            {this.renderStoreMemoryTest()}
        </div>
    };
}

export default observer(Index);