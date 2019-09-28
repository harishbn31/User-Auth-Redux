import React from 'react'
import axios from '../config/config'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users: []
        }
    }
    componentDidMount(){
        axios.get('/users',{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        }).then((response) => {
            this.setState({
                users: response.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (
            <ul>
            {this.state.users.map((user) => {
                    return (
                        <li key={user._id}>{user.username}</li>
                    )        
            })}
             </ul>
        )
    }
}