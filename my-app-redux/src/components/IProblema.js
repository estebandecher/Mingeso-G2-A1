import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'
import CasoDePrueba from './CasoDePrueba';

class IProblema extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      id_user:'1',
      user: {},
      check: false
    };
  }


  componentWillMount() {
    axios.get('/User/all/'+this.props.cosas.email)
      .then(res => {
        this.setState({ user: res.data, check: true });
        console.log(this.state.user);
      });
  }


  onChange = (evento) => {
    const state = this.state
    state[evento.target.name] = evento.target.value;
    this.setState(state);
  }



  onSubmit = (evento) => {
    evento.preventDefault();

    const {title, description,id_user} = this.state;

    axios.post('/problem/all', { title, description,id_user})
      .then((result) => {
        this.props.history.push("/Problemas")
      });
  }

  render() {
    const { title,description} = this.state;
    this.state.id_user=this.state.user.id;
    return (
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
                  <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Titulo Ejemplo" />
                </div>
     
             
                
                <div class="form-group">
                <label for="description">Problema:</label>
                 <textarea
                input type="text" name="description" class="textarea" value={description} onChange={this.onChange} placeholder="Texto de ejemplo"
                />
                </div>


                 <div class="form-group">
                <button type="submit" class="btn btn-default float-right">Agregar</button>
                </div>


              </form>

             

        





            </div>

            
 

          </div>
        </div>
      </body>
    );
  }
}

export default IProblema