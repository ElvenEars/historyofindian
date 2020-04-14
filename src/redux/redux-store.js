import { createStore, combineReducers } from "redux"
import historyReducer from './history-reducer'

let reducers = combineReducers({
    timeline: historyReducer
}
)

let store = createStore(reducers)

export default store