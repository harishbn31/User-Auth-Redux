import {combineReducers, createStore, applyMiddleware}  from 'redux'
import countReducer from '../reducers/countReducer'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'

const configureStore = () =>{
    const store = createStore(combineReducers({
        count: countReducer,
        user: userReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore