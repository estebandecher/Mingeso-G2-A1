import React, {Component} from "react";
import axios from 'axios';
import Cargando from "./Cargando";
import { Link } from 'react-router-dom';
import Extra from './Extra';


export default class Alumno extends Component{

    constructor() {
        super();
        this.state = {
          user: {},
          userUsach: "",
          check: false

        };
      }


    componentWillMount() {
        axios.get('/User/all/'+this.props.email)
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
                 <li>Alumno /<Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista Productos</Link></li>
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
                <Link to="/Problemas" ><button type="button" class="btn btn-default">Ver Problemas</button> </Link >
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