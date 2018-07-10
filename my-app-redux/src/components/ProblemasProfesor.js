import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra';
import Cargando from "./Cargando";


class ProblemasProfesor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      problem: [],
      nickname: "",
      rol: "",
      check: false,
      check2: false,

    };
  }

  componentWillMount() {

    
    axios.get('/problem/FromUser/'+this.props.match.params.id)
      .then(res => {
        this.setState({ problem: res.data,check2: true});
        console.log(this.state.problem);
      });
      axios.get('/User/all/role/'+this.props.cosas.email)
      .then(res => {
        this.setState({ rol: res.data, check: true});
        console.log(this.props.cosas.rol);
      });
  }


  render() {
   
    return (

      (this.state.check && this.state.check2) ?
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
                    <thead>
                      <tr>
                        <th><a>Id</a></th>
                        <th><a>Titulo</a></th>
                        <th><a>Accion</a></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.problem.map(p =>
                          <tr>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td> <Link to={`/ICasoDePrueba/${p.id}`}><button type="submit" class="btn btn-default">Agregar Casos de Prueba</button></Link></td>
                          </tr>
                      )}
                    </tbody>
                  </table>
                      
             

              </div>
            </div>
          </div>
        </div>
      </body>

    : 

    <Cargando />

    );


  

  

  }
}

export default ProblemasProfesor;