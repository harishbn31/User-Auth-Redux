import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Register from './components/user/register'
import Login from './components/user/login'
import Logout from './components/user/logout'
import Home from './components/home'
// import Counter from './components/counter'
import Account from './components/user/account'
import Profile from './components/user/profile'
// import User from './components/users'
// import Winner from './components/winner'
import _ from 'lodash'


class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        collapsed: true
      };
      this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
render(){
    return (
      <BrowserRouter>
				<div className="container">	
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <div>
                    <a className="navbar-brand" href="#">React Redux Auth</a>
                  </div>
                    
                   <div className="pull-right">
                    { !_.isEmpty(this.props.user) ? 
                       (<ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="btn btn-primary" to="/users/account">Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-secondary" to="/users/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-dark" tabIndex="-1"  to="/users/logout">Logout</Link>
                        </li> </ul>)
                    :
                        (<ul className="navbar-nav"> 
                        <li className="nav-item">
                          <Link className="btn btn-primary" to="/users/register">Register</Link>
                          <span> </span>
                        </li>
                        <li className="nav-item">
                          <Link className="btn btn-success" to="/users/login">Login</Link>
                        </li></ul>)
                       
                    }
                     </div>
                </div>
                </nav>								
								{/* <h2>Welocme to App</h2>  */}
                {/* <Counter /> */}
                {/* <h2>App {this.props.count}</h2>  */}
                {/* <User /> */}
                {/* <Winner /> */}

					<Switch>
						<Route exact path="/users/register" component={Register}/>
						<Route exact path="/users/login"  render={(props) =>  {
              return <Login {...props} />}} />
            <Route exact path="/users" component={Home} />
            <Route exact path="/users/logout" render={(props) =>{
              return <Logout {...props}  />
            }} />
            <Route exact path="/users/account" component={Account} />
            <Route exact path="/users/profile" component={Profile} />
					</Switch>
				</div>
			</BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // count: state.count,
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
