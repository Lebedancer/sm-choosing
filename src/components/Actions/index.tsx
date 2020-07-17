import React from "react";
import style from "./style.module.scss";
import { ListItem } from "../../types/CommonTypes";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

interface Iprops {
    className?: string
    isLoading: boolean
    data: ListItem[] | undefined
    onClick: () => void
}

class Index extends React.Component<Iprops> {
    renderLoading() {
        return <span className={style.loading}>Loading</span>
    }

    renderList() {
        const { data } = this.props;

        if (!data || data.length <= 0) {
            return null;
        }

        return <ul className={style.list}>
            {data.map(item => <li>{item.name}</li>)}
        </ul>
    }

    renderLabel() {
        const { isLoading, onClick } = this.props;
        return  isLoading ? <span>Loading.....</span> : <a className={style.head} onClick={onClick}>Actions</a>
    }

    render() {
        const { className } = this.props;
        return <div className={cn(style.actions, className)}>
            {this.renderLabel()}
            {this.renderList()}
        </div>
    };
}

export default Index;