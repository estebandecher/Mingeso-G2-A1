a import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      id_user: '',
      description: '',
      id_problem: ''
    };
  }
  onChange = (evento) => {
    const state = this.state
    state[evento.target.name] = evento.target.value;
    this.setState(state);
  }

  onSubmit = (evento) => {
    evento.preventDefault();

    const { id_user, description, id_problem} = this.state;

    axios.post('/Solution/all', { id_user, description, id_problem})
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { id_user, description, id_problem} = this.state;
    return (
      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            {
              <Extra />
            }
            <ul class="breadcrumb">
              <li>Soluciones /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista Soluciones</Link></li>
            </ul>
            <div class="panel-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="code">ID_USER:</label>
                  <input type="integer" class="form-control" name="id_user" value={id_user} onChange={this.onChange} placeholder="Id user" />
                </div>
                <div class="form-group">
                  <label for="name">DESCRIPTION:</label>
                  <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
                </div>
                <div class="form-group">
                  <label for="price">ID_PROBLEM:</label>
                  <input type="integer" class="form-control" name="id_problem" value={id_problem} onChange={this.onChange} placeholder="Id problem" />
                </div>
                <button type="submit" class="btn btn-default ">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Create;