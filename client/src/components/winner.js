import React from 'react'
import {connect} from 'react-redux'

class Winner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            winner: {},
            winnerList: []
        }
    }
    render(){
        return (
            <div>
                <h2>Get Winner Name -->>>> {this.state.winner.name}</h2>
                <button onClick={() => {
                    const user = this.props.users[Math.floor(Math.random() * this.props.users.length)]
                    if(!this.state.winnerList.includes(user.name)){
                        this.setState((prevState) => {
                             return {
                                 winner: user,
                                winnerList: [...prevState.winnerList, user.name]
                             }
                             
                         })
                    }
                }}>Get winner</button>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(Winner)