import React, { Suspense } from "react";
import Modal from "../../../../../../components/Modal";
import Input from "../../../../../../components/Input";
import Button from "../../../../../../components/Button";
import style from "./style.module.scss";

type Props = {
    onClose: () => void,
    onDelete: () => void,
    onDuplicate: () => void,
    isVisible: boolean,
    title: string,
    onChangeTitle: (title: string) => void
}

type State = {
    isDeleteDialogShown: boolean
    isDuplicateDialogShown: boolean
}

const DeleteModal = React.lazy(() => import('../../../../../../components/modals/DeleteModal'));
const DuplicateModal = React.lazy(() => import('../../../../../../components/modals/DuplicateModal'));

class BoardTitleModal extends React.Component<Props, State> {
    state = {
        isDeleteDialogShown: false,
        isDuplicateDialogShown: false,
    }

    onCloseModal = () => {
        let {onClose} = this.props;

        onClose && onClose()
    }

    hideDeleteDialog = () => {
        this.setState({
            isDeleteDialogShown: false,
            isDuplicateDialogShown: false,
        })
    }

    showDeleteDialog = () => {
        this.setState({
            isDeleteDialogShown: true,
            isDuplicateDialogShown: false,
        })
    }

    showDuplicateDialog = () => {
        this.setState({
            isDeleteDialogShown: false,
            isDuplicateDialogShown: true,
        })
    }

    renderDuplicateDialog() {
        const { onDuplicate } = this.props;

        return <Suspense fallback={<div>Loading...</div>}>
            <DuplicateModal
                isVisible
                title=""
                onClose={this.hideDeleteDialog}
                onSubmit={() => onDuplicate()}
            />
        </Suspense>
    }

    renderDeleteDialog() {
        const { onDelete } = this.props;

        return <Suspense fallback={<div>Loading...</div>}>
            <DeleteModal
                isVisible
                isLoading
                onClose={this.hideDeleteDialog}
                onSubmit={() => onDelete()}
            />
        </Suspense>
    }

    renderOwnView() {
        let {isVisible, title, onChangeTitle} = this.props;

        return <Modal
            onClose={this.onCloseModal}
            isVisible={isVisible}
        >
            <section>
                <Input
                    value={title}
                    onChange={(val: string) => onChangeTitle(val)}
                />
            </section>
            <section className={style.buttonsBar}>
                <Button onClick={this.showDeleteDialog}>Delete</Button>
                <Button onClick={this.showDuplicateDialog}>Duplicate</Button>
                <Button>Share</Button>
            </section>
        </Modal>
    }

    render() {
        const {isDeleteDialogShown, isDuplicateDialogShown} = this.state;

        if (isDeleteDialogShown) {
            return this.renderDeleteDialog()
        }

        if (isDuplicateDialogShown) {
            return this.renderDuplicateDialog()
        }

        return this.renderOwnView()
    }
}

export default BoardTitleModal;