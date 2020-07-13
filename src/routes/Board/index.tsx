import React from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import { observer } from "mobx-react";

class Index extends React.Component<any> {
    render() {
        return <div className="board">
            <Header />
            <Canvas />
        </div>
    };
}

export default observer(Index);