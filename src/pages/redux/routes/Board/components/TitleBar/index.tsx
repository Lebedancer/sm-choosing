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
        const { data: {boardName} } = this.props; // ? should we proxy all data through MV

        return <React.Fragment>
                <a href="#grid">
                    <h1>Miro</h1>
                </a>
                <button onClick={this.showShareModal}>
                    <h1>{boardName}</h1>
                </button>
                {canShowShareButton && <Button
                    onClick={this.showTitleDialogModal}
                >Share</Button>}
        </React.Fragment>
    }

    hideModal = () => {
        this.setState({ // Transfer this to redux store?
            isTitleDialogVisible: false,
            isShareDialogVisible: false
        })
    }

    showShareModal = () => {
        this.setState({ // Transfer this to redux store?
            isTitleDialogVisible: false,
            isShareDialogVisible: true
        })
    }

    showTitleDialogModal = () => {
        this.setState({ // Transfer this to redux store?
            isTitleDialogVisible: true,
            isShareDialogVisible: false
        })
    }

    render() {
        const { isLoading } = this.props;
        const { isTitleDialogVisible, isShareDialogVisible } = this.state;

        return <React.Fragment>
            <div className="titleBar">
                {isLoading ? 'loading' : this.renderContent()}
            </div>
            {isTitleDialogVisible && <BoardTitleModal
                onClose={this.hideModal}
                isVisible
            />}
            {isShareDialogVisible && <ShareModal
            onClose={this.hideModal}
            isVisible
        />}
        </React.Fragment>
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);