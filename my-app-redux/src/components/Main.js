import React, {Component} from "react";

export default class Main extends Component{


    constructor(props) {
        super(props);
        this.state = {
          title: "Carrito",
         
        };
      }

    render (){

        

        return ( 
            <div>
           
            [Main] Bienvenido: {this.props.name}<br/>
            <a href="/secret"> Ir a la zona secreta</a>
            <br/>
            <button > Login</button>
            <br/>
            <button > Logout</button>
        
            </div>


        
        )


    }




    
}