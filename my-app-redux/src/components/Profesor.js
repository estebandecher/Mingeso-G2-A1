import React, {Component} from "react";
import axios from 'axios';
import Cargando from "./Cargando";
import { Link } from 'react-router-dom';
import Extra from './Extra';


export default class Profesor extends Component{

    constructor() {
        super(); 
        this.state = {
          user: {id: '', email: '', role: '', name: ''},
          userUsach: "",
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



 


    render (){
        
        
        return ( 


         this.state.check ?

         <body class="custombody container-fluid">
           <div class="flex-center position-ref "> 
             <div class="container m-b-md" id="container2">
               {
                 <Extra />
               }
               <ul class="breadcrumb">
                 <li>Profesor /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista Productos</Link></li>
               </ul>
               <div className="container">
                 <div class="panel-body">
   
   
                   <div class="form-group">
                  <button> {this.props.cosas.name}</button>
                   </div>
   
                    <div class="form-group">
                  <button> {this.props.cosas.email}</button>
                   </div>
   
                    <div class="form-group">
                  <button> {this.props.cosas.nickname}</button>
                   </div>
                   
                  



                 <div class="form-group">
                <Link to="/IProblema" ><button type="button" class="btn btn-default">Agregar Problema</button> </Link >
                </div>


                <div class="form-group">
                <Link to={`/ProblemasProfesor/${this.state.user.id}`} ><button type="button" class="btn btn-default">Problemas creados</button> </Link >
                </div>


                   <div class="form-group">
                  <button> {this.state.user.id}</button>
                   </div>
   
                    <div class="form-group">
                  <button> {this.state.user.email}</button>
                   </div>
   
                    <div class="form-group">
                  <button> {this.state.user.nickname}</button>
                   </div>

                    <div class="form-group">
                  <button> {this.state.user.role}</button>
                   </div>

                    <div class="form-group">
                  <button> {this.state.user.name}</button>
                   </div>

             
   
                 </div>
               </div>
             </div>
           </div>
         </body>
            
            : 

            <Cargando />
        
        );


    }




    
}