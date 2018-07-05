import React, {Component} from "react";
import Extra from './Extra'

export default class UInvalido extends Component{
    render (){
        return (
          
          this.props.cosas.email=='jonny.willimas@gmail.com' ?


          <body class="custombody container-fluid">
          <div class="flex-center position-ref "> 
            <div class="container m-b-md" id="container2">
              {
                <Extra />
              }
                
            
                <div class="panel-body">



              <div class="form-group">
                <label for="title">Lo sentimos, debe registrarse para acceder a esta pagina</label>
                
              </div>

                <div class="form-group">
              <button type="button" class="btn btn-default" onClick={this.props.auth.login}>Login</button>
              </div>



              </div>

            
  
            </div>
          </div>
        </body>




          :


          <body class="custombody container-fluid">
          <div class="flex-center position-ref "> 
            <div class="container m-b-md" id="container2">
              {
                <Extra />
              }
                
            
                <div class="panel-body">



              <div class="form-group">
                <label for="title">Lo sentimos, usuario no registrado en la base de datos</label>
                
              </div>

                <div class="form-group">
              <button type="button" class="btn btn-default" onClick={this.props.auth.logout}>Logout</button>
              </div>



              </div>

            
  
            </div>
          </div>
        </body>


        
        )


    }




}    