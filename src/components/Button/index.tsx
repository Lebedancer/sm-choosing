import React from "react";
import "./style.css"

class Index extends React.Component<any> {
    render() {
        const { onClick, children } = this.props;
        return <button
            className="mButton"
            onClick={onClick}
        >
            {children}
        </button>
    };
}

export default Index;