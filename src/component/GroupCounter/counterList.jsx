import React from 'react'
import Counter from '../Count/index'
import {connect} from 'react-redux';

class CounterList extends React.Component {
 
    render() {
        return (
            <div>
                <input type="number" name="" id="" 
                    value={this.props.inputValue} 
                    onChange={this.props.inputChange} 
                />
                    {
                        this.props.counters.map(counter => (
                            <Counter key={counter.id} value = {counter.value} id={counter.id} />
                        ))
                    }
                <hr />
                <span>Sum: {this.props.totalNumber}</span>
            </div>
        )
    }

  
}

const stateToProps = (state)=> {
    return {
        totalNumber:state.totalNum,
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
