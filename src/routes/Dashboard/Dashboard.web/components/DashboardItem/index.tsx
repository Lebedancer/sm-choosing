import React, { Fragment } from "react";
import style from "./style.module.scss";
import Actions from "../../../../../components/Actions";
import Store, { IStore } from "./Store";
import {observer} from "mobx-react";

interface Iprops {
    boardName: string
    boardId: number
}

class Index extends React.Component<Iprops> {
    public store: IStore;

    constructor(props: any) {
        super(props);

        this.store = new Store(props);
    }

    renderActionsSection() {
        const { actionsList, isListLoading } = this.store;

        return <Actions
            onClick={() => this.store.loadList()}
            className={style.actions}
            isLoading={isListLoading}
            data={actionsList}
        />
    }

    renderContent() {
        const { boardName } = this.store;

        return <Fragment>
            <div className={style.image}/>
            <div className={style.textBlock}>{boardName}</div>
            {this.renderActionsSection()}
        </Fragment>
    }

    render() {

        return <div className={style.item}>
            {this.renderContent()}
        </div>
    };
}

export default observer(Index);