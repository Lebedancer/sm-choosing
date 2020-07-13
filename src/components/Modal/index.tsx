import React from 'react';
import classnames from 'classnames/bind';
import { Portal } from 'react-portal';
import style from './style.module.scss';

const cn = classnames.bind(style);

class Modal extends React.Component<any> {
    private modal: any

    constructor(props: any) {
        super(props);

        this.modal = React.createRef();
    }

    getWrapClassNames = () => {
        const {
            isVisible,
        } = this.props;

        return cn(`modal__wrap`, {
            modalAnimationIn: isVisible,
            modalAnimationOut: !isVisible,
        });
    }

    getCloseIcon = () => {
        return (
            <a className={style.closeIcon} href="#/">X</a>
        );
    }

    onMouseDown = (event: any) => {
        const isOverlay = !!event.target.getAttribute(`data-overlay`);

        if (!isOverlay) {
            return;
        }

        this.props.onClose();
    }

    render() {
            const {
                children,
            } = this.props;

            return (
                <Portal>
                    <div
                        ref={this.modal}
                        className={this.getWrapClassNames()}
                        onMouseDown={this.onMouseDown}
                        role="presentation"
                        data-overlay="1"
                    >
                        <div className={style.modal}>
                            {this.getCloseIcon()}
                            {children}
                        </div>

                    </div>
                </Portal>
            );
    }
}

export default Modal;
