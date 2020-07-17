import React from "react";
import style from "./style.module.scss";
import Store, { IStore } from "./Store";

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
        return <div></div>
    }

    render() {
        const { boardName } = this.store;
        return <div className={style.item}>
            <div className={style.image}/>
            <div className={style.textBlock}>{boardName}</div>
            {this.renderActionsSection()}
        </div>
    };
}

export default Index;