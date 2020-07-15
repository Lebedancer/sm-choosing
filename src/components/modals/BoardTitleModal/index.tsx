import React, { Suspense } from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";
import {observer} from "mobx-react";
import Store from "./BoardTitleStore";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}
const DeleteModal = React.lazy(() => import('../DeleteModal'));
const DuplicateModal = React.lazy(() => import('../DuplicateModal'));

class BoardTitleModal extends React.Component<CardProps> {
    private store: any;

    constructor(props: CardProps) {
        super(props);
        this.store = new Store();
    }

    onCloseModal = () => {
        let {onClose} = this.props;

        this.store.onSave()
        onClose && onClose()
    }

    renderDuplicateDialog() {
        return <Suspense fallback={<div>Loading...</div>}>
            <DuplicateModal
                isVisible
                onClose={() => this.store.hideDeleteDialog()}
                onSubmit={() => {}}
            />
        </Suspense>
    }

    renderDeleteDialog() {
        return <Suspense fallback={<div>Loading...</div>}>
            <DeleteModal isVisible onClose={() => this.store.hideDeleteDialog()}/>
        </Suspense>
    }

    renderOwnView() {
        let {isVisible} = this.props;
        const {title} = this.store;


        return <Modal
            onClose={this.onCloseModal}
            isVisible={isVisible}
        >
            <section>
                <Input
                    value={title}
                    onChange={(val: string) => this.store.onChangeTitle(val)}
                />
                <Input/>
            </section>
            <section className={style.buttonsBar}>
                <Button onClick={() => this.store.showDeleteDialog()}>Delete</Button>
                <Button onClick={() => this.store.showDuplicateDialog()}>Duplicate</Button>
                <Button>Share</Button>
            </section>
        </Modal>
    }

    render() {
        const {isDeleteDialogShown, isDuplicateDialogShown} = this.store;

        if (isDeleteDialogShown) {
            return this.renderDeleteDialog()
        }

        if (isDuplicateDialogShown) {
            return this.renderDuplicateDialog()
        }

        return this.renderOwnView()
    }
}

export default observer(BoardTitleModal);