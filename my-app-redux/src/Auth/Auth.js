// src/Auth/Auth.js

import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const LOGIN_SUCCESS_PAGE ='/secret';
const LOGIN_FAILURE_PAGE ='/';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mingesog2a12018.auth0.com',
    clientID: 'xEfQZFGutC8Pb_RLIVousJDqQwwpRL29',
    redirectUri: 'http://localhost:3000/Problemas',
    audience: 'https://mingesog2a12018.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  constructor(){
    this.login=this.login.bind(this);
  }

  handleAuthentication(){
    this.auth0.parseHash((err,authResult) =>{
      if (authResult && authResult.acceddToken && authResult.idToken){
        let expiresAt=JSON.stringify((authResult.expiresIn)*1000+new Date().getTime());
        localStorage.setItem("access_token",authResult.accessToken);
        localStorage.setItem("id_token",authResult.idToken);
        localStorage.setItem("expires_at",authResult.expiresAt);
        //location.hash="";
        //location.pathname=LOGIN_SUCCESS_PAGE;
        
      }else if(err){
        //location.pathname=LOGIN_FAILURE_PAGE;
        console.log(err);

      }
    } );

  }


  isAuthenticated(){
    let expiresAt=JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getItem()<expiresAt;
  }

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    //location.pathname=LOGIN_FAILURE_PAGE;
  }

  getProfile(){
    if(localStorage.getItem("id_token")){
      return jwtDecode(localStorage.getItem("id_token"));
    } else 
      return {};
    
  }

}