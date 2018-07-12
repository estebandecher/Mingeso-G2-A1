package com.app.mingeso.utility;

import com.app.mingeso.model.Code;
import com.app.mingeso.model.CodeResponse;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;


public class GlotRequest {

    private Code codigo;

    public GlotRequest(Code codigo){
        this.codigo= codigo;

    }

    public CodeResponse runCode(){


        ///this.codigo.getCode() this.codigo.getLanguage()
        String codigo = "\"print(42)\"";
        String query_url = "https://run.glot.io/languages/python/latest";
        String json = "{\"files\": [{\"name\": \"main.py\", \"content\":"+codigo+ "}]}";

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

            // Imprime json resultante
            System.out.println(result);

            System.out.println("result after Reading JSON Response");

            JSONObject myResponse = new JSONObject(result);
            System.out.println("stdout: "+myResponse.getString("stdout"));
            System.out.println("stderr: "+myResponse.getString("stderr"));
            System.out.println("error: "+myResponse.getString("error"));

            in.close();
            conn.disconnect();

        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }


}

