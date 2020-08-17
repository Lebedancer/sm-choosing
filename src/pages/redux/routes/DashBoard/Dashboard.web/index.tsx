import React from 'react';
import style from './style.module.scss';
import DashboardItem from './components/DashboardItem';
import {connect} from 'react-redux';

const mapStateToProps = ({dashboard}: { dashboard: any }) => {
    return dashboard;
}

const mapDispatchToProps = (dispatch: any) => ({
});

class DashboardWeb extends React.Component<any> {
    renderList() {
        const {data, loading} = this.props;
            debugger
        if (loading) {
            return <div>Loading....</div>
        }

        return data.list.map((item: any) => <DashboardItem {...item} />)

    }

    render() {
        return <div className={style.dashboard}>
            <aside className={style.sidebar}/>
            <div className={style.content}>
                {this.renderList()}
            </div>
        </div>
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWeb);