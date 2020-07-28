import React from "react";
import Modal from "../../Modal";
import {observer} from "mobx-react";

type Props = {
    onClose: () => void,
    isVisible: boolean
}

function BoardTitleModal({ onClose, isVisible}: Props) {

    return <Modal
        onClose={onClose}
        isVisible={isVisible}
    >

    </Modal>
}

export default observer(BoardTitleModal);