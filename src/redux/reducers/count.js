import { ADD_COUNT, MIN_COUNT } from '../constants'

const defaultState = 0;

export default function count(state = defaultState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return ++state
        case MIN_COUNT:
            return --state
        default:
            return state;
    }
}