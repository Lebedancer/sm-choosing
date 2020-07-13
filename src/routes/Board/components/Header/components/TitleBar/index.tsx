import React from "react";
import Button from "../../../../../../components/Button";
import titleBarStore from "./titleBarStore";
import {observer} from "mobx-react";
import "./style.css"
import BoardTitleModal from "../../../../../../components/BoardTitleModal";

class Index extends React.Component<any> {
    render() {
        const {canShowShareButton, boardTitle, isDialogVisible } = titleBarStore;

        return <React.Fragment>
            <div className="titleBar">
                <a href="#grid">
                    <h1>Miro</h1>
                </a>
                <button onClick={() => titleBarStore.showModal()}>
                    <h1>{boardTitle}</h1>
                </button>
                {canShowShareButton && <Button>Share</Button>}
            </div>
            {isDialogVisible && <BoardTitleModal
                onClose={() => titleBarStore.hideModal()}
                isVisible
            />}
        </React.Fragment>
    };
}

export default observer(Index);