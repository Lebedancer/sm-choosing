import React from "react";
import classnames from "classnames/bind";
import style from "./style.module.scss";

const cn = classnames.bind(style);

class Index extends React.Component<any> {
    render() {
        const { value, className, onChange } = this.props;
        return <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cn('input', className)}
        />
    };
}

export default Index;