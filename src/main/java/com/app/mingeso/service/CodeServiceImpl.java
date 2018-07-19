package com.app.mingeso.service;

import com.app.mingeso.model.Code;
import com.app.mingeso.model.CodeResponse;
import com.app.mingeso.utility.GlotRequest;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class CodeServiceImpl implements CodeService{

    @Override
    public CodeResponse createCode(Code codigo) {

        GlotRequest gr = new GlotRequest(codigo);
        JSONObject jo = gr.runCode();
        CodeResponse cr= new CodeResponse(jo.getString("stderr"),jo.getString("stdout"));
        return cr;
    }
}
