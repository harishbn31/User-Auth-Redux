import React from 'react'
import axios from '../../config/config'
import {setUser} from '../../actions/user'
import {connect} from 'react-redux'

 class Account extends React.Component{
    // constructor(props){
    //     super(props)

    // }
    componentDidMount(){
        const data= localStorage.getItem('userAuthToken')
        axios.get('/users/account',{
            headers: {
                'x-auth': data
            }
        })
        .then(response => {
            if(response.data.errors) {
                alert(response.data.alert)
            } else {
                this.props.dispatch(setUser(response.data))
            }
        })
    }
    render(){
        return(
            <div>
                <h2>Account Details</h2>
                <p>{this.props.user._id}</p>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.email}</p>
            </div>
            
        )   
    }
} 
const mapStateToProps = ( state)=>{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Account)