import React from "react";
import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";
import {observer} from "mobx-react";
import Store from "./Store";
import style from "./style.module.scss";

type CardProps = {
    onClose: () => void,
    isVisible: boolean
}

const store = new Store();

function BoardTitleModal({ onClose, isVisible}: CardProps) {

    return <Modal
        onClose={onClose}
        isVisible={isVisible}
    >

    </Modal>
}

export default observer(BoardTitleModal);