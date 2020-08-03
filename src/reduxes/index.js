import { render } from "react-dom"
import { useDispatch } from "react-redux";

let uuid = 0;
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
                let countersSize = newState.counters.length
                if(action.value > countersSize ) {
                    let counterObject;
                    for(let i = 0; i < action.value-countersSize; i++ ) {
                        ++uuid
                        console.log(uuid)
                        counterObject = {
                            id: uuid,
                            value: 0
                        }
                        newState.counters.push(counterObject)
                    }
                } else if(action.value < countersSize ) {
                    for(let i = 0; i < countersSize - action.value; i++) {
                        let counterObject = newState.counters.pop();
                        newState.totalNum = newState.totalNum-counterObject.value;
                    }
                }
            return newState;
        default:
            return state
    }
  }
  