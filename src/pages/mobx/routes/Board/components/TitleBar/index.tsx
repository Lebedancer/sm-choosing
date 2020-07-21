import React from "react";
import Button from "../../../../../../components/Button";
import TitleBarStore from "./TitleBarStore";
import {observer} from "mobx-react";
import "./style.css"
import BoardTitleModal from "../../../../../../components/modals/BoardTitleModal";
import ShareModal from "../../../../../../components/modals/ShareModal";

class Index extends React.Component<any> {
    private store: any;

    constructor(props: any) {
        super(props);

        this.store = new TitleBarStore();
    }

    renderContent() {
        const {canShowShareButton, boardTitle } = this.store;

        return <React.Fragment>
                <a href="/dashboard">
                    <h1>Miro</h1>
                </a>
                <button onClick={() => this.store.showModal()}>
                    <h1>{boardTitle}</h1>
                </button>
                {canShowShareButton && <Button
                    onClick={() => this.store.showShareModal()}
                >Share</Button>}
        </React.Fragment>
    }

    render() {
        const { isTitleDialogVisible, isShareDialogVisible, isLoading } = this.store;

        return <React.Fragment>
            <div className="titleBar">
                {isLoading ? 'loading' : this.renderContent()}
            </div>
            {isTitleDialogVisible && <BoardTitleModal
                onClose={() => this.store.hideModal()}
                isVisible
            />}
            {isShareDialogVisible && <ShareModal
            onClose={() => this.store.hideModal()}
            isVisible
        />}
        </React.Fragment>
    };
}

export default observer(Index);