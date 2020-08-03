import React from 'react'
import { connect } from 'react-redux';

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
            let action = {
                type: "INCREMENT",
                id: e.target.id
            }
            dispatch(action)
        },
        onClickReduce(e) {
            let action = {
                type: "DECREMENT",
                id: e.target.id
            }
            dispatch(action)
        }
    }
}

export default connect(null,dispatchToprops)(Counter)