import React from "react";
import Button from "../../../../../../components/Button";
import TitleBarStore from "./TitleBarStore";
import {observer} from "mobx-react";
import "./style.css"
import BoardTitleModal from "../../../../../../components/BoardTitleModal";

class Index extends React.Component<any> {
    private store: any;

    constructor(props: any) {
        super(props);

        this.store = new TitleBarStore();
    }
    render() {
        const {canShowShareButton, boardTitle, isDialogVisible } = this.store;

        return <React.Fragment>
            <div className="titleBar">
                <a href="#grid">
                    <h1>Miro</h1>
                </a>
                <button onClick={() => this.store.showModal()}>
                    <h1>{boardTitle}</h1>
                </button>
                {canShowShareButton && <Button>Share</Button>}
            </div>
            {isDialogVisible && <BoardTitleModal
                onClose={() => this.store.hideModal()}
                isVisible
            />}
        </React.Fragment>
    };
}

export default observer(Index);