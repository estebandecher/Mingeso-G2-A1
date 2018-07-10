import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'
import CasoDePrueba from './CasoDePrueba';
import Cargando from "./Cargando";

class ICasosDePrueba extends Component {


  constructor(props) {
    super(props);
    this.state = {
      problem: {},
      input:'',
      output:'',
      testCase: [],
      check1: false, 
      check2: false
    };
  }

  componentDidMount() {
    axios.get('/problem/'+this.props.match.params.id)
      .then(res => {
        this.setState({ problem: res.data ,check1: true});
        console.log(this.state.problem);
      });

      axios.get('/TestCases/FromProblem/'+this.props.match.params.id)
      .then(res => {
        this.setState({ testCase: res.data , check2: true});
        console.log(this.state.testCase);
      });

  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { input, output} = this.state;

    axios.put('/TestCases/Create/'+this.props.match.params.id, { input, output})
      .then((result) => {
        this.props.history.push("/ICasoDePrueba/"+this.props.match.params.id)
      });
  }





  render() {
   
    return (

      this.state.check1 && this.state.check2 ?

      <body class="custombody container-fluid">
        <div class="flex-center position-ref "> 
          <div class="container m-b-md" id="container2">
            {
              <Extra />
            }
            
            <div class="panel-body">
                      
                <div class="form-group">
                  <label for="title">Titulo:</label>
                  <input type="text" class="form-control" name="title" value={this.state.problem.title} placeholder="Titulo Ejemplo" />
                </div>
     
             
                
                <div class="form-group">
                <label for="description">Problema:</label>
                 <textarea
                input type="text" name="description" class="textarea" value={this.state.problem.description} placeholder="Texto de ejemplo"
                />
                </div>

               

              

   <div class="form-group">
{this.state.testCase.map(ts =>
 <div class="form-row">
   <div class="col-5">
   <div class="form-group">
       <label for="inputs">Entrada:</label>
       <input type="text" class="form-control" name="inputs" value={ts.input} placeholder="entrada ejemplo" />
     </div>
     </div>
  
     <div class="col-5">
   <div class="form-group">
   <label for="outpust">Salida:</label>
   <input type="text" class="form-control" name="outputs" value={ts.output} placeholder="6" />
   
 </div>
 </div> 
 

</div> 
)}     
</div> 



  <form onSubmit={this.onSubmit}>
              
              <div class="form-row">

               <div class="col-5">
              <div class="form-group">
                  <label for="input">Entrada:</label>
                  <input type="text" class="form-control" name="input" value={this.state.input} onChange={this.onChange} placeholder="entrada ejemplo" />
                </div>
                </div>

                   <div class="col-5">
                  <div class="form-group">
                  <label for="output">Salida:</label>
                  <input type="text" class="form-control" name="output" value={this.state.output} onChange={this.onChange} placeholder="6" />
                  
                </div>
                </div>   

                <div class="col-auto">     
                <button type="submit" class="btn btn-success mb-2">+</button>
              </div> 


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

export default ICasosDePrueba;