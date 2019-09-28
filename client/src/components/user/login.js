import React from 'react'
import axios from '../../config/config'
// import {Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'


export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isRedirect: false
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
                this.props.handleAuth(true)
                // this.setState({
                //     isRedirect: true
                // })
                this.props.history.push('/users')
                
            }
        })
    }
    render(){
        return (
            <div>
                {/* {this.state.isRedirect && < Redirect to="/users" />} */}
                <h2>Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}