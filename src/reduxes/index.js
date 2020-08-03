import { render } from "react-dom"

const defaultState = {
    inputValue: 0,
    totalNum : 0,
    counters : []

}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state 
        case 'DECREMENT':
            return state 
        case 'change_input':
            let newState = JSON.parse(JSON.stringify(state))
                newState.inputValue = action.value;
                console.log(action.value)
            return newState;
        default:
            return state
    }
  }
  