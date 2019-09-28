import React from 'react'
import {connect} from 'react-redux'
import {addUser,removeUser} from '../actions/user'
import uuid from 'uuid'


class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:  ''
        }
        this.nameChange = this.nameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    static getDerivedStateFromProps(nextProps,prevState){
        // console.log('derived state')
        if(prevState.name === nextProps.name){
            return nextProps
        }
        return null
    }
    nameChange(e){
        const name = e.target.value;
        this.setState({name});

    }
    handleSubmit(e){
        e.preventDefault();
        const user = {
            _id: uuid(),
            name: this.state.name
        }
        // console.log(user)
        this.props.dispatch(addUser(user))
        this.setState({name: ''})
    }
    editHandle(e){
        e.preventDefault();
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                <h2>Listing Users</h2>
                {this.props.users.map((user, index) => {
                    return (
                    <p key={user._id}>{index+1}. {user.name} <input type="button" value="Edit" onClick={this.editHandle} /> <input type="button" value="Remove" onClick={() => {
                        this.props.dispatch(removeUser(user._id))
                    }} /></p>
                    )
                })} 
                <h2>Add User </h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" type="text" value={this.state.name} onChange={this.nameChange} />
                    <input type="submit" />
                </form>
                {this.props.prevUser && <h2>Previous user info ---> {this.props.prevUser.name}</h2>}
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
      users: state.users,
      prevUser: state.users[state.users.length -1]
    }
  }

export default connect(mapStateToProps)(User)