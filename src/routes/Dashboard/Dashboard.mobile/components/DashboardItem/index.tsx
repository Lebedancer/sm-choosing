import React from "react";
import style from "./style.module.scss";

class Index extends React.Component<any> {
    render() {
        return <div className={style.item}>
            <div className={style.image}/>
            <div className={style.textBlock}></div>
        </div>
    };
}

export default Index;