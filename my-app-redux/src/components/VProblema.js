/* eslint no-restricted-globals: 0*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'
import CasoDePrueba from './CasoDePrueba';
import NotFound from './NotFound';
import UNoRegistrado from './UNoRegistrado';
import Cargando from "./Cargando";

class VProblema extends Component {


  constructor(props) {
    super(props);
    this.state = {
      problem: {},
      testCase: [],
      rol: '',
      check1: false,
      check2: false,
      check3: false
    };
  }

  componentDidMount() {
    axios.get('/problem/'+this.props.match.params.id)
      .then(res => {
        this.setState({ problem: res.data, check1: true });
        console.log(this.state.problem);
      });

      
      axios.get('/TestCases/FromProblem/'+this.props.match.params.id)
      .then(res => {
        this.setState({ testCase: res.data, check2: true });
        console.log(this.state.testCase);
      }); 
      

      axios.get('/User/all/role/'+this.props.cosas.email)
      .then(res => {
        this.setState({ rol: res.data, check3: true });
        console.log(this.state.rol);
      });
  }


  /*
  onChange = (e) => {
    const state = this.state.problem
    state[e.target.name] = e.target.value;
    this.setState({problem:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description,id_user } = this.state.problem;

    axios.put('/problem/'+this.props.match.params.id, { title, description,id_user })
      .then((result) => {
        this.props.history.push("/VProblema/"+this.props.match.params.id)
      });
  }

*/



  render() {
   
      return (

        (this.state.check && this.state.check2 && this.state.check3) ?
      
        <body class="custombody container-fluid">
          <div class="flex-center position-ref "> 
            <div class="container m-b-md" id="container2">
              {
                <Extra />
              }
              
              <div class="panel-body">
                <form onSubmit={this.onSubmit}>
                
  
                
                  <div class="form-group">
                    <label for="title">Titulo:</label>
                    <input type="text" class="form-control" name="title" value={this.state.problem.title} onChange={this.onChange} placeholder="Titulo Ejemplo" />
                  </div>
       
                          
                  
                  <div class="form-group">
                  <label for="description">Problema:</label>
                   <textarea
                  input type="text" name="description" class="textarea" value={this.state.problem.description} onChange={this.onChange} placeholder="Texto de ejemplo"
                  />
                  </div>
  
                 
  
                
  
     <div class="form-group">
  {this.state.testCase.map(ts =>
   <div class="form-row">
     <div class="col-5">
     <div class="form-group">
         <label for="input">Entrada:</label>
         <input type="text" class="form-control" name="input" value={ts.input} onChange={this.onChange} placeholder="entrada ejemplo" />
       </div>
       </div>
    
       <div class="col-5">
     <div class="form-group">
     <label for="output">Salida:</label>
     <input type="text" class="form-control" name="output" value={ts.output} onChange={this.onChange} placeholder="6" />
     
   </div>
   </div> 
   
  
  </div> 
  )}     
  </div> 
  
  
                <div class="form-group">
                  <button type="submit" class="btn btn-default float-right">Solucionar</button>
                  </div>
  
  
  
                
  
                </form>
  
  
  
              </div>
  
              
   
  
            </div>
          </div>
        </body>


        : 

        <Cargando />
    
    );
  
    
  }
}

export default VProblema