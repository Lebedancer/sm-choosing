import React from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";
import {observer} from "mobx-react";
import store from "./BoardTitleStore";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}

function BoardTitleModal({ onClose, isVisible}: CardProps) {
    const { title } = store;
    
    function onCloseModal() {
        store.onSave()
        onClose()
    }
    
    return <Modal
        onClose={onCloseModal}
        isVisible={isVisible}
    >
        <section>
            <Input
                value={title}
                onChange={(val: string) => store.onChangeTitle(val)}
            />
            <Input />
        </section>
        <section className={style.buttonsBar}>
            <Button>Delete</Button>
            <Button>Duplicate</Button>
            <Button>Share</Button>
        </section>
    </Modal>
}

export default observer(BoardTitleModal);