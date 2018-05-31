import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class Problemas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      problem: []
    };
  }

  componentDidMount() {
    axios.get('/problem/all')
      .then(res => {
        this.setState({ problem: res.data });
        console.log(this.state.problem);
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
                            <td> <Link to={`/VProblema/${p.id}`}><button type="submit" class="btn btn-default">Ver</button></Link></td>
                          </tr>
                      )}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Problemas;