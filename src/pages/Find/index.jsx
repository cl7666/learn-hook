import React from "react";
import { connect } from 'react-redux'
import * as countActions from '../../redux/actions/count'
import { bindActionCreators } from 'redux'



const Find = (props) => {
    function clickAddHandle() {
        props.countActions.addCount();
    }
    function clickMinHandle() {
        props.countActions.minCount();
    }
    return (
        <div>
            发现页面：{props.count}
            <button onClick={clickAddHandle}>+</button>
            <button onClick={clickMinHandle}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countActions: bindActionCreators(countActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Find)