import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './custom.css';
import logo from './components/carro.png';
//import Auth from "./Auth/Auth";
import Auth from './Auth';

//Del proyecto original
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Login from './components/Login';
import CasoDePrueba from './components/CasoDePrueba';
import CasoDePruebaL from './components/CasoDePruebaL';
import IProblema from './components/IProblema';
import VProblema from './components/VProblema';
import ICasoDePrueba from './components/ICasoDePrueba';
import Problemas from './components/Problemas';
//import Ingreso from './Auth/Auth';
//<Route path='/Ingreso' component={Ingreso} />

//Desde la de 0
import Main from "./components/Main";
import Secret from "./components/Secret";
import Callback from "./components/Callback";
import NotFound from "./components/NotFound";
import Alumno from './components/Alumno';
import Profesor from './components/Profesor';
import UInvalido from './components/UInvalido';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Carrito",
      productos: [],
      
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
              <span><img src={logo} className="App-logo" alt="logo" /><h1>Apoyo FCYP</h1></span>
            </div>
           
            
            <div className="container">
              <div class="panel panel-default">
                <div class="panel-heading">
                <a href="/Problemas"> Ir a la Problemas</a>

                   <div class="form-group">
               <button onClick={this.props.auth.login}> Login</button>
                 
                </div>

                 <div class="form-group">
               <button onClick={this.props.auth.logout}> Logout</button>
                 
                </div>

          
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
