import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './custom.css';
import logo from './components/carro.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Carrito",
      productos: []
    };
  }

  componentDidMount(){
    Axios.get('/api/productos')
      .then(res => {
        this.setState({ productos: res.data });
        console.log(this.state.productos);
      });
  }

  render() {
    let title = this.state.title;
    return (
      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            <div className="banner">
              <span><img src={logo} className="App-logo" alt="logo" /><h1>Carrito</h1></span>
            </div>
            <ul class="breadcrumb">
              <li>Productos /<Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Producto</Link></li>
            </ul>
            <div className="container">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    Lista de Productos
                  </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-stripe container-fluid">
                    <thead>
                      <tr>
                        <th><a>Código</a></th>
                        <th><a>Nombre</a></th>
                        <th><a>Precio</a></th>
                        <th><a>Categoría</a></th>
                        <th><a>Fecha de Vencimiento</a></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.productos.map(c =>
                          <tr>
                            <td><Link to={`/Show/${c.id}`}>{c.codigo}</Link></td>
                            <td>{c.nombre}</td>
                            <td>{c.precio}</td>
                            <td>{c.categoria}</td>
                            <td>{c.fecha_vencimiento}</td>
                          </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default App

