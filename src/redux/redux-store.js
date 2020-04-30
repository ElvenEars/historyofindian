import { createStore, combineReducers } from "redux"
import historyReducer from './history-reducer'
import mapReducer from "./map-reducer"

let reducers = combineReducers({
    timeline: historyReducer,
    map : mapReducer
}
)

let store = createStore(reducers)

export default store