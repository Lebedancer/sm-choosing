import React from "react";
import style from "./style.module.scss";

class Index extends React.Component<any> {
    renderLoading() {
        return <span className={style.loading}>Loading</span>
    }

    render() {
        const { onClick, children, isLoading } = this.props;
        return <button
            className={style.mButton}
            onClick={onClick}
        >

            {isLoading ? this.renderLoading() : children}
        </button>
    };
}

export default Index;