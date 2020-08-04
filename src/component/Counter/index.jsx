import React from 'react'
import { connect } from 'react-redux';
import { generateIncreaseAction, generateDecreaseAction } from '../../actions/index'
class Counter extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClickAdd} id={this.props.id}>+</button>
                <span> {this.props.value} </span>
                <button onClick={this.props.onClickReduce} id={this.props.id}>-</button>
            </div>
        )
    }

}

const dispatchToprops = (dispatch) => {
    return {
        onClickAdd(e) {
            dispatch(generateIncreaseAction(e))
        },
        onClickReduce(e) {
            dispatch(generateDecreaseAction(e))
        }
    }
}

export default connect(null, dispatchToprops)(Counter)