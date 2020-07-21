import React from 'react';
import mobx from '../../imgs/mobx.png';
import redux from '../../imgs/redux.png';
import style from './style.module.scss';

class App extends React.Component<any> {
    render() {
        return <div className={style.App}>
            <h1 className={style.header}>Your move</h1>
            <section className={style.imgSection}>
                <a href="/mobx">
                    <img src={mobx} className={style.img} alt="logo"/>
                </a>
                <a href="/redux">
                    <img src={redux} className={style.img} alt="logo"/>
                </a>
            </section>
        </div>
    };
}

export default App;


