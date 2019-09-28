import {combineReducers, createStore}  from 'redux'
import countReducer from '../reducers/countReducer'
import userReducer from '../reducers/users'

const configureStore = () =>{
    const store = createStore(combineReducers({
        count: countReducer,
        users: userReducer
    }))
    return store
}
export default configureStore