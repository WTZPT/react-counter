import React from 'react'
import { connect } from 'react-redux';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 };
        //  this.onClickAdd = this.onClickAdd.bind(this);
        // this.onClickReduce = this.onClickReduce.bind(this);
    }

    onClickAdd = () => {
        //this.setState({count: this.state.count + 1});
        this.props.increase();
        this.setState((state, props) => {
            return { count: state.count + 1 }
        })
    }

    onClickReduce = () => {
        // this.setState({ count: this.state.count - 1 });
        this.props.decrease();
        this.setState((state, props) => {
            return { count: this.state.count - 1 }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickAdd}>+</button>
                <span> {this.state.count} </span>
                <button onClick={this.onClickReduce}>-</button>
            </div>
        )
    }

}

const dispatchToprops = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: "INCREMENT",
                id:this.props.id
            }
            dispatch(action)
        }
    }
}

export default connect(null,dispatchToprops)(Counter)