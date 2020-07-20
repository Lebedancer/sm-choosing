import React, { Fragment } from "react";
import style from "./style.module.scss";
import {observer} from "mobx-react";
import store from "./Store";
import Button from "../../../../components/Button";

const ArrayItem = observer(function(props: any) {
    const { testArray } = store;
    const { kiy } = props;
    const { text } = testArray[kiy];

    return <li>{text}</li>
})

const ObjItem = observer(function(props: any) {
    const itemArr = props.item;

    return itemArr.map((item: any) => <li>{item}</li>)
})

const CombiSubItem = observer(function({ items }) {
    return items.map((item: any) => <li>{item}</li>)
})

// @ts-ignore
const CombiItem = observer(function(props: any) {
    const itemObj = props.item;
    const values = Object.values(itemObj.obj)

    return values.map((item: any) => <CombiSubItem items={item}/>)
})


class Index extends React.Component<any> {

    render1lvlArray() {
        const { testArray } = store;

        return <ul>{
            testArray.map((item, index) => <ArrayItem store={store} kiy={index} />)
        }</ul>
    }

    render1lvlObj() {
        const { testObj } = store;

        const values = Object.values(testObj);

        return <ul>{
            // no rerender of parent component
            values.map((item, index) => <ObjItem item={item} />)
        }</ul>
    }

    renderMultiLvlArray() {
        const { testCombination } = store;

        return <ul style={{paddingLeft: 60}}>{
            // no rerender of parent component
            testCombination.map((item, index) => <CombiItem item={item} />)
        }</ul>
    }

    render() {
        return <div className={style.item}>
            <section>
                <div className={style.tip}>Test shows how mobx will update nested values in object</div>
                <Button onClick={() => store.toggleTestArrayChange()}>toggle</Button>
                {this.render1lvlArray()}
            </section>
            <section>
                <div className={style.tip}>Test shows how mobx will update nested values in array</div>
                <Button onClick={() => store.toggleTestObjChange()}>toggle obj</Button>
                <Button onClick={() => store.toggleTestObjBlock()}>toggle obj section</Button>
                {this.render1lvlObj()}
            </section>
            <section>
                <div className={style.tip}>Test shows how mobx will update deeeep nested values</div>
                <Button onClick={() => store.toggleTestCombiBlock()}>toggle block</Button>
                <Button onClick={() => store.toggleTestCombiItem()}>toggle item</Button>
                {this.renderMultiLvlArray()}
            </section>
            <section>
                <div className={style.tip}>Test shows how much memory mobx needed to change huge amounts of data </div>
                <Button onClick={() => store.toggleMasData()}>toggleMasData</Button>
                <Button onClick={() => store.injectMasData()}>injectMasData</Button>
            </section>
        </div>
    };
}

export default observer(Index);