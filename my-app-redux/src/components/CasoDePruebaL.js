import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class CasoDePruebaL extends Component {


  constructor(props) {
    super(props);
    this.state = {
      testCase: []
    };
  }

  componentDidMount() {  
    axios.get('/TestCases/FromProblem/'+this.props.match.params.id)
      .then(res => {
        this.setState({ testCase: res.data });
        console.log(this.state.testCase);
      });
  }

  onChange = (e) => {
    const state = this.state.testCase
    state[e.target.name] = e.target.value;
    this.setState({testCase:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { input, output } = this.state.testCase;

    axios.put('/TestCases/FromProblem/'+this.props.match.params.id, { input, output })
      .then((result) => {
        this.props.history.push("/CasosDePruebaL/"+this.props.match.params.id)
      });
  }

  render() {
    //const { input,output} = this.state.testCase;
    return (

              
      <div class="form-row">

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


        <div class="col-auto">     
       <button type="submit" class="btn btn-success mb-2">+</button>
     </div>   


     </div> 
    )}     




     </div> 


   


         

          
 

       
    );
  }
}

export default CasoDePruebaL