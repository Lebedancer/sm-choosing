import React from "react";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import DeleteModal from "../DeleteModal";
import {observer} from "mobx-react";
import store from "./BoardTitleStore";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}

class BoardTitleModal extends React.Component<CardProps> {
    onCloseModal() {
        let {onClose} = this.props;

        store.onSave()
        onClose()
    }

    renderDuplicateDialog() {

    }

    renderDeleteDialog() {
        return <DeleteModal isVisible onClose={() => store.hideDeleteDialog()}/>
    }

    renderOwnView() {
        let {isVisible} = this.props;
        const {title} = store;


        return <Modal
            onClose={this.onCloseModal}
            isVisible={isVisible}
        >
            <section>
                <Input
                    value={title}
                    onChange={(val: string) => store.onChangeTitle(val)}
                />
                <Input/>
            </section>
            <section className={style.buttonsBar}>
                <Button onClick={() => store.showDeleteDialog()}>Delete</Button>
                <Button>Duplicate</Button>
                <Button>Share</Button>
            </section>
        </Modal>
    }

    render() {
        const { isDeleteDialogShown } = store;
        if (isDeleteDialogShown) {
            return this.renderDeleteDialog()
        }

        return this.renderOwnView()
    }
}

export default observer(BoardTitleModal);