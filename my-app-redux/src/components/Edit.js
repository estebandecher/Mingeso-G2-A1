import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      producto: {}
    };
  }

  componentDidMount() {
    axios.get('/api/productos/'+this.props.match.params.id)
      .then(res => {
        this.setState({ producto: res.data });
        console.log(this.state.producto);
      });
  }

  onChange = (e) => {
    const state = this.state.producto
    state[e.target.name] = e.target.value;
    this.setState({producto:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { codigo, nombre, precio, categoria, fecha_vencimiento } = this.state.producto;

    axios.put('/api/productos/'+this.props.match.params.id, { codigo, nombre, precio, categoria, fecha_vencimiento })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    //let { codigo, nombre, precio, categoria, fecha_vencimiento } = this.state;
    return (
      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            {
              <Extra />
            }
            <ul class="breadcrumb">
              <li>Productos /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista Productos</Link></li>
            </ul>
            <div class="panel-body"><form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="code">Código:</label>
                  <input type="integer" class="form-control" name="codigo" value={this.state.producto.codigo} onChange={this.onChange} placeholder="Código" />
                </div>
                <div class="form-group">
                  <label for="name">Nombre:</label>
                  <input type="text" class="form-control" name="nombre" value={this.state.producto.nombre} onChange={this.onChange} placeholder="Nombre" />
                </div>
                <div class="form-group">
                  <label for="price">Precio:</label>
                  <input type="money" class="form-control" name="precio" value={this.state.producto.precio} onChange={this.onChange} placeholder="Precio" />
                </div>
                <div class="form-group">
                  <label for="cetgory">Categoría:</label>
                  <input type="text" class="form-control" name="categoria" value={this.state.producto.categoria} onChange={this.onChange} placeholder="Categoría" />
                </div>
                <div class="form-group">
                  <label for="expireDate">Fecha de Vencimiento:</label>
                  <input type="date" class="form-control" name="fecha_vencimiento" value={this.state.producto.fecha_vencimiento} onChange={this.onChange} placeholder="Fecha de Vencimiento" />
                </div>
                <button type="submit" class="btn btn-default">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Edit;