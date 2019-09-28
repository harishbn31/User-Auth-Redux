import React from 'react'
import axios from '../../config/config'
// import {connect} from 'react-redux'


export default class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/users/register', formData)
        .then(response => {
            if(response.data.errors) {
                alert(response.data.alert)
            } else {
                console.log(response.data);
                this.props.history.push('/users/login')
            }
        })
        // console.log(formData)
    }
    render(){
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>UserName </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
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
// const mapStateToProps = (state)=>{
//     return {
//         loggedUser: state.loggedUser
//     }
// }