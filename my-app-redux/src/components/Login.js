import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      texto: '',
    };
  }
  onChange = (evento) => {
    const state = this.state
    state[evento.target.name] = evento.target.value;
    this.setState(state);
  }

  onSubmit = (evento) => {
    evento.preventDefault();

    const { email, password} = this.state;

    axios.post('/User/login', { email, password })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { email,password,texto} = this.state;
    return (
      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            {
              <Extra />
            }
            
            <div class="panel-body">
              <form onSubmit={this.onSubmit}>
              
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="nombre@usach.cl" />
                </div>
     
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" name="password" value={password} onChange={this.onChange} placeholder="******" />
                 
                </div>
                
                <div class="form-group">
                <label for="password">Problema:</label>
                 <textarea
                input type="text" name="texto" class="textarea" onChange={this.handleChange} placeholder="Texto de ejemplo"
                />
                </div>


                <button type="submit" class="btn btn-default ">Login</button>
              </form>

             
            </div>
 

          </div>
        </div>
      </body>
    );
  }
}

export default Login