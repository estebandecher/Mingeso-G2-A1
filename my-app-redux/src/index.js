import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

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


ReactDOM.render(
    <Router >
        <div>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/login' component={Login} />
            <Route path='/show/:id' component={Show} />

            <Route path='/casoDePrueba' component={CasoDePrueba} />
            <Route path='/CasosDePruebaL/:id' component={CasoDePruebaL} />

            <Route path='/iProblema' component={IProblema} />

            <Route path='/ICasoDePrueba/:id' component={ICasoDePrueba} />

            <Route path='/VProblema/:id' component={VProblema} />
            
            <Route path='/Problemas' component={Problemas} />
        </div>
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
