import React from "react";
import Modal from "../../Modal";
import Button from "../../Button";
import {observer} from "mobx-react";
import style from "./style.module.scss";

type Props = {
    onClose: () => void,
    onSubmit: () => void,
    isVisible: boolean
    isLoading: boolean
}

function DeleteModal({ onClose, isVisible, isLoading, onSubmit}: Props) {
    return <Modal
        onClose={onClose}
        isVisible={isVisible}
    >
        <h1>Delete this board?</h1>
        <p>You have bla-blabla</p>

        <section className={style.buttonsBar}>
            <Button isLoading={isLoading} onClick={() => onSubmit()}>Delete</Button>
            <Button onClick={onClose}>Cancel</Button>
        </section>
    </Modal>
}

export default observer(DeleteModal);