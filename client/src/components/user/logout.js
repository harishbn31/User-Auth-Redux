import React from 'react';
import {connect} from 'react-redux'
import {removeUser} from '../../actions/user'

function Logout (props) {

    // componentDidMount() {
    //     axios.delete('/users/logout', {
    //         headers: {
    //             'x-auth': localStorage.getItem('userAuthToken')
    //         }
    //     })
    //     .then(response => {
            localStorage.removeItem('userAuthToken')
            props.history.push('/users/login')
            props.dispatch(removeUser())
        // })
        // .catch(err => {
            // this.props.history.push('/users/login')
        // })
    // }

        return(
            <p>Logging out...</p>
        )
}
const mapStateToProps =(state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Logout)