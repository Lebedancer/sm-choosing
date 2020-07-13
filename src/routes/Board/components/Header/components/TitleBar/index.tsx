import React from "react";
import Button from "../../../../../../components/Button";
import titleBarStore from "../../../../../../stores/titleBarStore";
import "./style.css"

class Index extends React.Component<any> {
    private store: any;

    constructor(props: any) {
        super(props)

        this.store = titleBarStore;
    }

    render() {
        const { canShowShareButton } = this.store;

        return <div className="titleBar">
            <a href="#grid">
                <h1>Miro</h1>
            </a>
            <a href="#">
                <h1>board name</h1>
            </a>
            { canShowShareButton && <Button>Share</Button> }
        </div>
    };
}

export default Index;