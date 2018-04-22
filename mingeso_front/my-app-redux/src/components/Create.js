import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      codigo: '',
      nombre: '',
      precio: '',
      categoria: '',
      fecha_vencimiento: ''
    };
  }
  onChange = (evento) => {
    const state = this.state
    state[evento.target.name] = evento.target.value;
    this.setState(state);
  }

  onSubmit = (evento) => {
    evento.preventDefault();

    const { codigo, nombre, precio, categoria, fecha_vencimiento } = this.state;

    axios.post('/api/productos', { codigo, nombre, precio, categoria, fecha_vencimiento })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { codigo, nombre, precio, categoria, fecha_vencimiento } = this.state;
    return (
      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            <div className="banner">
              <span><img src={this.props.logo} className="App-logo" alt="logo" /><h1>Carrito</h1></span>
            </div>
            {
              <Extra />
            }
            <ul class="breadcrumb">
              <li>Productos /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista Productos</Link></li>
            </ul>
            <div class="panel-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="code">Código:</label>
                  <input type="integer" class="form-control" name="codigo" value={codigo} onChange={this.onChange} placeholder="Código" />
                </div>
                <div class="form-group">
                  <label for="name">Nombre:</label>
                  <input type="text" class="form-control" name="nombre" value={nombre} onChange={this.onChange} placeholder="Nombre" />
                </div>
                <div class="form-group">
                  <label for="price">Precio:</label>
                  <input type="money" class="form-control" name="precio" value={precio} onChange={this.onChange} placeholder="Precio" />
                </div>
                <div class="form-group">
                  <label for="category">Categoría:</label>
                  <input type="text" class="form-control" name="categoria" value={categoria} onChange={this.onChange} placeholder="Categoría" />
                </div>
                <div class="form-group">
                  <label for="expireDate">Fecha de Vencimiento:</label>
                  <input type="date" class="form-control" name="fecha_vencimiento" value={fecha_vencimiento} onChange={this.onChange} placeholder="Fecha de Vencimiento" />
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