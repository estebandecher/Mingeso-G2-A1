/* eslint no-restricted-globals: 0*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Extra from './Extra'
import CasoDePrueba from './CasoDePrueba';
import NotFound from './NotFound';
import UNoRegistrado from './UNoRegistrado';
import Alumno from './Alumno';
import Profesor from './Profesor';
import Cargando from './Cargando';
import UInvalido from './UInvalido';

class Home extends Component {


  constructor() {
    super();
    this.state = {
      rol: '',
      check: false,
      user: {},
      wait: true,
    };
  }

  componentWillMount() {
      
      axios.get('/User/all/role/'+this.props.cosas.email)
      .then(res => {
        this.setState({ rol: res.data, check: true });
        console.log(this.state.rol);
      });
  
  }





  render() {
    
   

    return (

  ( this.state.check ? (this.state.rol=='2' ? location.pathname="/Profesor" : ( this.state.rol=='1' ?  location.pathname="/Alumno" : location.pathname="/UInvalido" ) ) :  (<Cargando />)  )
  
  );

  
  }
}

export default Home