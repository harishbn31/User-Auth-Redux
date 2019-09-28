import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement,reset} from '../actions/count'

function Counter(props){
    // console.log(props)
    return (
        <div>
            <h2>Count  {props.count}</h2>
            <button onClick={() => {
                props.dispatch(increment())
            }}>Up </button>
            <button onClick={() => {
                props.count > 0 ? 
                props.dispatch(decrement()) : props.dispatch(reset())
            }}>Down </button>
            <button onClick={() => {
                props.dispatch(reset())
            }}>Reset </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)
