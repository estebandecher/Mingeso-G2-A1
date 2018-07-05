import React, {Component} from "react";
import Extra from './Extra'

export default class UNoRegistrado extends Component{
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
                  <label for="title">Lo sentimos, debe iniciar sesión para acceder a esta ruta.</label>
                  
                </div>
    
                </div>
    
                
     
    
              </div>
            </div>
          </body>



        
        )


    }




}    