package com.app.mingeso.utility;

import com.app.mingeso.model.Code;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class GlotRequest {

    private Code codigo;

    public GlotRequest(Code codigo){
        this.codigo= codigo;
    }

    // metodo que agrega la extension al json que procesa glot, segun el lenguage a ejecutar
    public String createJson(String code, String language){

        String ext = "";
        switch(language){
            case "java" : ext = "\"main.class\"";
                break;
            case "python" : ext = "\"main.py\"";
                break;
            case "c" : ext = "\"main.c\"";
                break;
        }
        //se parsea el codigo
        code = parserCodigo(code);
        String json = "{\"files\": [{\"name\": "+ext+", \"content\":"+code+ "}]}";
        return json;

    }

    //metodo que parsea el codigo para ser valido en el json
    public String parserCodigo(String code){
        return org.codehaus.jettison.json.JSONObject.quote(code);
    }
    //Se envia un request a glot, con el codigo a ejecutar
    public JSONObject runCode(){

        String codigo = this.codigo.getCode();
        String language = this.codigo.getLanguage();
        String query_url = "https://run.glot.io/languages/"+language+"/latest";
        //Se crea el json a enviar como request
        String json = createJson(codigo, language);
       
        try {
            String token = "Token 54153b24-b9eb-4963-bb06-18f4340904d1";
            //add request header
            URL url = new URL(query_url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(5000);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", token);
            conn.setRequestProperty("Content-type", "application/json");
            conn.setDoOutput(true);
            conn.setDoInput(true);

            OutputStream os = conn.getOutputStream();
            os.write(json.getBytes("UTF-8"));
            os.close();

            // read the response
            InputStream in = new BufferedInputStream(conn.getInputStream());
            String result = IOUtils.toString(in, "UTF-8");
            JSONObject myResponse = new JSONObject(result);
            in.close();
            conn.disconnect();
            return myResponse;

        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }


}

