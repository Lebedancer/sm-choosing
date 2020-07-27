import React from "react";
import Button from "../../../../../../components/Button";
import "./style.css"
import BoardTitleModal from "../../../../../../components/modals/BoardTitleModal";
import ShareModal from "../../../../../../components/modals/ShareModal";
import { isLoading, canShowShareButton } from "./selectors";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        isLoading: isLoading(state),
        canShowShareButton: canShowShareButton(state),
        ...state.boardInfo
    };
}

const mapDispatchToProps = (dispatch: any) => ({
});

class Index extends React.Component<any> {
    state = {
        isTitleDialogVisible: false,
        isShareDialogVisible: false,
    }

    renderContent() {
        const { data: {boardName} } = this.props;

        return <React.Fragment>
                <a href="#grid">
                    <h1>Miro</h1>
                </a>
                <button onClick={() => {}}>
                    <h1>{boardName}</h1>
                </button>
                {canShowShareButton && <Button
                    onClick={() => {}}
                >Share</Button>}
        </React.Fragment>
    }

    render() {
        const { isLoading } = this.props;
        const { isTitleDialogVisible, isShareDialogVisible } = this.state;

        return <React.Fragment>
            <div className="titleBar">
                {isLoading ? 'loading' : this.renderContent()}
            </div>
            {isTitleDialogVisible && <BoardTitleModal
                // onClose={() => this.store.hideModal()}
                onClose={() => {}}
                isVisible
            />}
            {isShareDialogVisible && <ShareModal
            onClose={() => {}}
            // onClose={() => this.store.hideModal()}
            isVisible
        />}
        </React.Fragment>
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);