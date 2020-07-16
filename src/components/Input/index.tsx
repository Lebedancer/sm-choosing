import React from "react";
import classnames from "classnames/bind";
import style from "./style.module.scss";

const cn = classnames.bind(style);

type Props = {
    value?: any
    className?: string
    onChange: (e: string) => void
    onBlur?: () => void

}

class Index extends React.Component<Props> {
    onBlur() {
        const { onBlur } = this.props;
        onBlur && onBlur()
    }

    render() {
        const { value, className, onChange } = this.props;
        return <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={this.onBlur}
            className={cn('input', className)}
        />
    };
}

export default Index;