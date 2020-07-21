import React, { Fragment } from "react";
import style from "./style.module.scss";
import {observer} from "mobx-react";

class Index extends React.Component<any> {
    renderContent() {
        const { autoIncrementTestName } = this.props.store;

        return <Fragment>
            <div className={style.image}/>
            <div className={style.textBlock}>{autoIncrementTestName}</div>
        </Fragment>
    }

    render() {

        return <div className={style.item}>
            {this.renderContent()}
        </div>
    };
}

export default observer(Index);