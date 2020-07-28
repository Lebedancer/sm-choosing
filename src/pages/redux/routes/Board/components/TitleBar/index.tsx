import React from "react";
import Button from "../../../../../../components/Button";
import "./style.css"
import BoardTitleModal from "../BoardTitleModal";
import ShareModal from "../../../../../../components/modals/ShareModal";
import { isLoading, canShowShareButton, getBoardBoardTitle } from "./selectors";
import { changeTitle } from "../../../../actions/boardInfoActionCreators";
import {connect} from "react-redux";

type TitleBarState = {
    isTitleDialogVisible: boolean,
    isShareDialogVisible: boolean
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: isLoading(state),
        canShowShareButton: canShowShareButton(state),
        boardTitle: getBoardBoardTitle(state),
        // ...state.boardInfo // could be problems with overwrite
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    changeTitle: (title: string) => {
        dispatch(changeTitle(title));
    }
});

class Index extends React.Component<any, TitleBarState> {
    state = {
        isTitleDialogVisible: false,
        isShareDialogVisible: false,
    }

    renderContent() {
        const { boardTitle } = this.props; // ? should we proxy all data through MV

        return <React.Fragment>
                <a href="#grid">
                    <h1>Miro</h1>
                </a>
                <button onClick={this.showTitleDialogModal}>
                    <h1>{boardTitle}</h1>
                </button>
                {canShowShareButton && <Button
                    onClick={this.showShareModal}
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

    onChangeTitle = (title: string) => {
        const { changeTitle } = this.props;

        changeTitle(title)
    }

    render() {
        const { isLoading, boardTitle } = this.props;
        const { isTitleDialogVisible, isShareDialogVisible } = this.state;

        return <React.Fragment>
            <div className="titleBar">
                {isLoading ? 'loading' : this.renderContent()}
            </div>
            {isTitleDialogVisible && <BoardTitleModal
                onClose={this.hideModal}
                onDelete={() => {}}
                onDuplicate={() => {}}
                onChangeTitle={this.onChangeTitle}
                isVisible
                title={boardTitle}
            />}
            {isShareDialogVisible && <ShareModal
            onClose={this.hideModal}
            isVisible
        />}
        </React.Fragment>
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);