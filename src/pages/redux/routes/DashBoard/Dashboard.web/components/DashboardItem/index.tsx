import React, { Fragment } from "react";
import style from "./style.module.scss";
import Actions from "../../../../../../../components/Actions";
import {observer} from "mobx-react";
import { ListItem } from "../../../../../../../types/CommonTypes";

interface Iprops {
    boardName: string
    boardId: number
    actionsList: ListItem[]
    isListLoading: true
}

class Index extends React.Component<Iprops> {
    renderActionsSection() {
        const { actionsList, isListLoading } = this.props;

        return <Actions
            onClick={() => {}}
            className={style.actions}
            isLoading={isListLoading}
            data={actionsList}
        />
    }

    renderContent() {
        const { boardName } = this.props;

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