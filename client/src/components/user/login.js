import React from 'react'
import axios from '../../config/config'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetUser} from '../../actions/user'
import data from '../../../../classroom_data.json'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isRedirect: false,
            users: data
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/users/login', formData)
        .then(response => {
            if(response.data.errors) {
                alert(response.data.alert)
            } else {
                const token = response.data.token
                localStorage.setItem('userAuthToken', token)
                // this.setState({
                //     isRedirect: true
                // })
                this.props.dispatch(startSetUser(response.data))
                this.props.history.push('/users')
                
            }
        })
    }
    render(){
        return (
            <div>
                {/* {this.state.isRedirect && < Redirect to="/users" />} */}
                {console.log(this.state.users)}
                <div className="col-md-4">
                <h2><b>Log In</b></h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <label className="control-label">Email</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <label className="control-label">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>
                    <input type="submit" className="btn btn-primary" />
                </form>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)