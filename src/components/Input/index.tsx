import React from "react";
import classnames from "classnames/bind";
import style from "./style.module.scss";

const cn = classnames.bind(style);

type Props = {
    value?: any
    className?: string
    onChange: (e: string) => void

}

type State = {
    value: string
}

class Index extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    onChangeValue = (value: string) => {
        this.setState({
            value
        })
    }

    onBlur = () => {
        const { value } = this.state;
        const { onChange } = this.props;

        onChange(value)
    }

    render() {
        const {  className } = this.props;
        const { value } = this.state;

        return <input
            type="text"
            value={value}
            onChange={(e) => this.onChangeValue(e.target.value)}
            onBlur={this.onBlur}
            className={cn('input', className)}
        />
    };
}

export default Index;