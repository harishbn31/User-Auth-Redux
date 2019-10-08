import React from 'react'
import axios from '../../config/config'


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
                // console.log(response.data);
                this.props.history.push('/users/login')
            }
        })
        // console.log(formData)
    }
    render(){
        return (
            <div>
                <div className="col-md-4">
                    <h2><b>Sign Up</b></h2>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <label className="control-label">UserName </label>
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
                        <label className="control-label">Email</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                        <label className="control-label">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/> <br/>
                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
                
            </div>
        )
    }
}