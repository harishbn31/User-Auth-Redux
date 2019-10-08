import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

class Profile extends React.Component{
    componentDidMount(){
        // if(_.isEmpty(this.props.user)){
        //     const data= localStorage.getItem('userAuthToken')
            
        // }
    }
    render(){
        return(
            <div>
                <h2>Profile</h2>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.email}</p>
            </div>
            
        )   
    }
}
const mapStateToProps= (state)=>{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Profile)