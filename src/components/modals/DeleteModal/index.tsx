import React from "react";
import Modal from "../../Modal";
import Button from "../../Button";
import {observer} from "mobx-react";
import Store from "./Store";
import style from "./style.module.scss";

const store = new Store();

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}

function DeleteModal({ onClose, isVisible}: CardProps) {
    const { deleting } = store

    const onDelete = () => {
        store.onDelete()
            .then(() => onClose())
    }

    return <Modal
        onClose={onClose}
        isVisible={isVisible}
    >
        <h1>Delete this board?</h1>
        <p>You have bla-blabla</p>

        <section className={style.buttonsBar}>
            <Button isLoading={deleting} onClick={onDelete}>Delete</Button>
            <Button onClick={onClose}>Cancel</Button>
        </section>
    </Modal>
}

export default observer(DeleteModal);