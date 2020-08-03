
import React from 'react'
import Counter from '../Count/index'
import {connect} from 'react-redux';

class CounterList extends React.Component {

    constructor(props){
        super(props);
        this.state = {counters:0}
    
    }


    inputChange = e => {

        this.setState(
            { counters: parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0 }
        )
    }

    moveCounter = value => {
        this.setState({
            total: this.state.total - value
        })
    }
 
    render() {

        return (
            <div>
                <input type="number" name="" id="" value={this.props.inputValue} onChange={this.props.inputChange} />
                {new Array(this.state.counters).fill(0).map((value, index) => (
                    <Counter key={index} increase={this.store.dispatch({ type: 'INCREMENT' })} decrease={this.store.dispatch({ type: 'DECREMENT' })} moveCounter={this.moveCounter} />
                ))}
                <hr />
                <span>{this.props.totalNumber}</span>
            </div>
        )
    }

  
}

const stateToProps = (state)=> {
    return {
        totalNumber:state.totalNumber,
        counters : state.counters,
        inputValue : state.inputValue
    }
}

const dispatchToprops = (dispatch) => {
    return {
        inputChange(e) {

            let action = {
                type : "change_input",
                value : parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0 
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToprops)(CounterList)
