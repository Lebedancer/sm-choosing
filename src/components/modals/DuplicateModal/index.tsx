import React from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";
import {observer} from "mobx-react";
import style from "./style.module.scss";

type Props = {
    onClose: () => void,
    isVisible: boolean,
    title: string,
    onSubmit: () => void,
}

function BoardTitleModal({ onClose, isVisible, title, onSubmit}: Props) {
    return <Modal
        onClose={() => onClose()}
        isVisible={isVisible}
    >
        <h1>Copy board in account</h1>
        <Input value={title} onChange={() => {}} />
        <section className={style.buttonsBar}>
            <Button onClick={() => onSubmit()}>Duplicate</Button>
            <Button onClick={() => onClose()}>Cancel</Button>
        </section>
    </Modal>
}

export default observer(BoardTitleModal);