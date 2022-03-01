import { ADD_COUNT, MIN_COUNT } from '../constants'

export function addCount() {
    return {
        type: ADD_COUNT
    }
}

export function minCount() {
    return {
        type: MIN_COUNT
    }
}

