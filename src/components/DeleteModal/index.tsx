import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import {observer} from "mobx-react";
import store from "./store";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}

function DeleteModal({ onClose, isVisible}: CardProps) {
    function onCloseModal() {
        store.onSave()
        onClose()
    }

    return <Modal
        onClose={onCloseModal}
        isVisible={isVisible}
    >
        <h1>Delete this board?</h1>
        <p>You have bla-blabla</p>

        <section className={style.buttonsBar}>
            <Button>Delete</Button>
            <Button>Cancel</Button>
        </section>
    </Modal>
}

export default observer(DeleteModal);