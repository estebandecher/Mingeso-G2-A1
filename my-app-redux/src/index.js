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

import Main from './components/Main';



import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);





registerServiceWorker();

