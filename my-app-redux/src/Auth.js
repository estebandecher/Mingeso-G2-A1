/* eslint no-restricted-globals: 0*/
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//import User from './components/User';

const LOGIN_SUCCESS_PAGE ="/Home";
const LOGIN_FAILURE_PAGE ='/';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mingesog2a12018.auth0.com',
    clientID: 'xEfQZFGutC8Pb_RLIVousJDqQwwpRL29',
    //redirectUri: 'http://localhost:3000/callback',
    redirectUri: 'http://localhost:9091/callback',
    audience: 'https://mingesog2a12018.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid email profile'
  });


  constructor(){
    this.login=this.login.bind(this);
    this.state = {
      role: ''
    };
  }
  login() {
    this.auth0.authorize();
  }

 


  handleAuthentication(){
    this.auth0.parseHash((err,authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken){
        let expiresAt=JSON.stringify((authResult.expiresIn) * 1000 + new Date().getTime());
        localStorage.setItem("access_token",authResult.accessToken);
        localStorage.setItem("id_token",authResult.idToken);
        localStorage.setItem("expires_at",expiresAt);
        location.hash="";
        location.pathname=LOGIN_SUCCESS_PAGE;

      
        const mailUsuario=this.getProfile().email;
        //this.state.user= axios.get('/User/all/'+mailUsuario);

        //Permisos
        let role;
        //role= axios.get('/User/all/role/'+mailUsuario);
        //axios.get('/User/all/role/'+mailUsuario).then(role);

        
        axios.get('/User/all/role/'+mailUsuario)
        .then(res => {
          this.setState({ role: res.data });
          console.log(this.state.role);
        });

        /*
        while(){

        }
        */
        
        //location.pathname='/secret/'+role;
        

        /*
        if (role==1){
          location.pathname='/Alumno';
        }
        else if (role==2){
          location.pathname='/Profesor';
        }
        else if (role==-1){
          location.pathname='/UInvalido';
          //Deslogear
          this.logout();
        }
        else{
          location.pathname='/NotFound';
        }
        */
        
      }else if(err){
        location.pathname=LOGIN_FAILURE_PAGE;
        console.log(err);

      }
    } );

  }


  isAuthenticated(){
    let expiresAt=JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
/* eslint no-restricted-globals: 0*/
  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname=LOGIN_FAILURE_PAGE;
  }

  getProfile(){
    if(localStorage.getItem("id_token")){
      return jwtDecode(localStorage.getItem("id_token"));
    } else 
      return {};
    
  }

}