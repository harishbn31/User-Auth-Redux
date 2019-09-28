import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Register from './components/user/register'
import Login from './components/user/login'
import Logout from './components/user/logout'
import Home from './components/home'
import Counter from './components/counter'
import User from './components/users'
import Winner from './components/winner'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      isAuth: false
    }
  }
  handleAuth = (bool) => {
    this.setState({
      isAuth: bool
    })
  }
	componentDidMount() {
		if(localStorage.getItem('userAuthToken')) {
			this.setState({ isAuth: true })
		}
	}
  render(){
    return (
      <BrowserRouter>
				<div className="container">	
						{ this.state.isAuth && (
							<div>
								<Link className="btn btn-light" to="/users/account">Account</Link>
								<span> </span>
								<Link className="btn btn-danger" to="/users/logout">Logout</Link>
								<h2>Welocme to App</h2> 
                <Counter />
                <h2>App {this.props.count}</h2> 
                <User />
                <Winner />
							</div>
            )}
            	{ !this.state.isAuth && ( 
              <div>
								<Link className="btn btn-light" to="/users/register">Register</Link>
								<span> </span>
								<Link className="btn btn-danger" to="/users/login">Login</Link>
              </div>
                )
              }

					<Switch>
						<Route exact path="/users/register" component={Register}/>
						<Route exact path="/users/login"  render={(props) =>  {
              return <Login {...props} handleAuth={this.handleAuth}/>}} />
            <Route exact path="/users" component={Home} />
            <Route exact path="/users/logout" render={(props) =>{
              return <Logout {...props} handleAuth={this.handleAuth} />
            }} />
					</Switch>
				</div>
			</BrowserRouter>
    )
  }
    
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
