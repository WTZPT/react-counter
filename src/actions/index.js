import {
    DECREMENT,
    INCREMENT,
    CHANGE_INPUT
} from '../reducers/constant'

const generateInputChangeAction = (e) => ({
    type: CHANGE_INPUT,
    value: parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 0
})

const generateIncreaseAction = (e) => ({
    type: INCREMENT,
    id: e.target.id
})

const generateDecreaseAction = (e) => ({
    type: DECREMENT,
    id: e.target.id
})
export {
    generateInputChangeAction,
    generateIncreaseAction,
    generateDecreaseAction
}