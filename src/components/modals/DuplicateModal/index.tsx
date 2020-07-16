import React from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";
import {observer} from "mobx-react";
import Store from "./Store";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean,
    onSubmit: () => void,
}

function BoardTitleModal({ onClose, isVisible, onSubmit}: CardProps) {
    const store = new Store();
    const { title } = store;

    function onClickSubmit() {
        onSubmit();
    }

    function onCloseModal() {
        onClose()
    }

    return <Modal
        onClose={onCloseModal}
        isVisible={isVisible}
    >
        <h1>Copy board in account</h1>
        <Input value={title} onChange={() => {}} />
        <section className={style.buttonsBar}>
            <Button onClick={onClickSubmit}>Duplicate</Button>
            <Button onClick={onClose}>Cancel</Button>
        </section>
    </Modal>
}

export default observer(BoardTitleModal);