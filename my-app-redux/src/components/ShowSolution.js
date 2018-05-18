import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      soluciones: {}
    };
  }

  componentDidMount() {
    axios.get('/Solution/'+this.props.match.params.id)
      .then(res => {
        this.setState({ soluciones: res.data });
        console.log(this.state.soluciones);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/Solution/'+id)
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
              <li>soluciones /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista soluciones</Link></li>
            </ul>
            <div className="container">
              <div class="panel-body">
                <table class="table table-stripe container-fluid">
                  <tr>
                    <td><a>Descripcion</a></td>
                    <td>{this.state.soluciones.description}</td>
                  </tr>
                  <tr>
                    <td><a>ID_PROBLEMA</a></td>
                    <td>{this.state.soluciones.id_problem}</td>
                  </tr>
                  <tr>
                    <td><a>ID_USER</a></td>
                    <td>{this.state.soluciones.id_user}</td>
                  </tr>
                </table>
                <Link to={`/edit/${this.state.soluciones.id}`} class="btn btn-default">Modificar</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.soluciones.id)} class="btn btn-danger">Borrar</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Show;