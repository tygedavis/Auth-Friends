import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false
  }

    handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        //console.log(res)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friendslist');
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <form onSubmit={this.login}>
        <div>
          <h2>Please Login</h2>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button type="submit">Login</button>
          </div>
          {this.state.isLoading && "Please wait a second while we log you in..."}
      </form>
    )
  }
}

export default Login