let uuid = 0;
const defaultState = {
    inputValue: 0,
    totalNum : 0,
    counters : []
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'INCREMENT':
            let newCounters = newState.counters.map(
                function(item,idx) {
                    if(item.id == action.id) {
                        return {
                            ...item,
                            value: item.value+1
                        }
                    }else{
                        return item;
                    }
                }
            )
            newState.counters = newCounters
            newState.totalNum = newState.totalNum + 1;
            return newState 
        case 'DECREMENT':
            let newCounterss = newState.counters.map(
                function(item,idx) {
                    if(item.id == action.id) {
                        return {
                            ...item,
                            value: item.value-1
                        }
                    }else{
                        return item;
                    }
                }
            )
            newState.counters = newCounterss
            newState.totalNum = newState.totalNum - 1;
            return newState 
        case 'change_input':
                newState.inputValue = action.value;
                let countersSize = newState.counters.length
                if(action.value > countersSize ) {
                    let counterObject;
                    for(let i = 0; i < action.value-countersSize; i++ ) {
                        ++uuid
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
  