import React, {Component} from "react";
import Extra from './Extra'

export default class Cargando extends Component{



    render (){
        return ( 
            <body class="custombody container-fluid">
            <div class="flex-center position-ref "> 
              <div class="container m-b-md" id="container2">
                {
                  <Extra />
                }
                
                <div class="panel-body">
                  
    
                <div class="form-group">
                  <label for="title">Cargando...</label>
                  
                </div>
    
                </div>
    
                
     
    
              </div>
            </div>
          </body>


        
        )


    }




}    