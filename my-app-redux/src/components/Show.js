import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: {}
    };
  }

  componentDidMount() {
    axios.get('/api/productos/'+this.props.match.params.id)
      .then(res => {
        this.setState({ productos: res.data });
        console.log(this.state.productos);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/productos/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
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
            <div className="container">
              <div class="panel-body">
                <table class="table table-stripe container-fluid">
                  <tr>
                    <td><a>Código</a></td>
                    <td>{this.state.productos.codigo}</td>
                  </tr>
                  <tr>
                    <td><a>Nombre</a></td>
                    <td>{this.state.productos.nombre}</td>
                  </tr>
                  <tr>
                    <td><a>Price</a></td>
                    <td>{this.state.productos.precio}</td>
                  </tr>
                  <tr>
                    <td><a>Categoría</a></td>
                    <td>{this.state.productos.categoria}</td>
                  </tr>
                  <tr>
                    <td><a>Fecha de Vencimiento</a></td>
                    <td>{this.state.productos.fecha_vencimiento}</td>
                  </tr>
                </table>
                <Link to={`/edit/${this.state.productos.id}`} class="btn btn-default">Modificar</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.productos.id)} class="btn btn-danger">Borrar</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Show;