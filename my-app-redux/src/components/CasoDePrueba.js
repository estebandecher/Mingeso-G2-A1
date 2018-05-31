import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'

class CasoDePrueba extends Component {

  constructor() {
    super();
    this.state = {
      entrada: '',
      salida: '',
    };
  }
  onChange = (evento) => {
    const state = this.state
    state[evento.target.name] = evento.target.value;
    this.setState(state);
  }

  onSubmit = (evento) => {
    evento.preventDefault();

    const { entrada, salida} = this.state;

    axios.post('/', { entrada, salida })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { entrada,salida} = this.state;
    return (
     
            
            
              <form onSubmit={this.onSubmit}>
              
              <div class="form-row">

               <div class="col-5">
              <div class="form-group">
                  <label for="entrada">Entrada:</label>
                  <input type="text" class="form-control" name="entrada" value={entrada} onChange={this.onChange} placeholder="entrada ejemplo" />
                </div>
                </div>

                   <div class="col-5">
                  <div class="form-group">
                  <label for="salida">Salida:</label>
                  <input type="text" class="form-control" name="salida" value={salida} onChange={this.onChange} placeholder="6" />
                  
                </div>
                </div>   

                <div class="col-auto">     
                <button type="submit" class="btn btn-success mb-2">+</button>
              </div> 


            </div>

            </form>
 

       
    );
  }
}

export default CasoDePrueba