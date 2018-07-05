/* eslint no-restricted-globals: 0*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';
import Axios from 'axios';


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

import Callback from './components/Callback';
import NotFound from './components/NotFound';
import UInvalido from './components/UInvalido';
import UNoRegistrado from './components/UNoRegistrado';
import Alumno from './components/Alumno';
import Profesor from './components/Profesor';
import Home from './components/Home';
import Cargando from './components/Cargando';

const auth = new Auth();

let username= auth.getProfile().name || "Jonny Williams" ;
let email= auth.getProfile().email || "jonny.willimas@gmail.com" ;
let nickname= auth.getProfile().nickname || "jonny.williams" ;
let rol='-1';

const cosas = {
    name: username,
    email: email,
    nickname: nickname,
    rol: rol,
    location: location.pathname.replace(/^\/?|\/$/g,""),
    auth
};



const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }
  


export const makeMainRoutes = () => {
    return (
    <Router  component={App}>
        <div>

            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/login' component={Login} />
            <Route path='/show/:id' component={Show} />

            <Route path='/casoDePrueba' component={CasoDePrueba} />
            <Route path='/CasosDePruebaL/:id' component={CasoDePruebaL} />

           

            <Route path='/ICasoDePrueba/:id' component={ICasoDePrueba} />

            <Route path="/VProblema/:id" render={(props) => <VProblema auth={auth} cosas={cosas} {...props} />} />
             
            <Route path="/Problemas" render={(props) => <Problemas auth={auth} cosas={cosas} {...props} />} />

            <Route path="/IProblema" render={(props) => <IProblema auth={auth} cosas={cosas} {...props} />} />


            <Route path="/Home" render={(props) => <Home auth={auth} cosas={cosas} {...props} />} />
             <Route path="/Profesor" render={(props) => <Profesor auth={auth} cosas={cosas} {...props} />} />
             <Route path="/Alumno" render={(props) => <Alumno auth={auth} cosas={cosas} {...props} />} />

            <Route path="/UNoRegistrado" render={(props) => <UNoRegistrado auth={auth} cosas={cosas} {...props} />} />


            <Route path="/NotFound" render={(props) => <NotFound auth={auth} cosas={cosas} {...props} />} />
            <Route path="/UInvalido" render={(props) => <UInvalido auth={auth} cosas={cosas} {...props} />} />
            <Route path="/Cargando" render={(props) => <Cargando auth={auth} cosas={cosas} {...props} />} />

          

             <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>


        </div>
    </Router>
    );
    }