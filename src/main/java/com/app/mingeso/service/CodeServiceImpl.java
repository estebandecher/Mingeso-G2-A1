package com.app.mingeso.service;

import com.app.mingeso.model.Code;
import com.app.mingeso.model.CodeResponse;
import com.app.mingeso.utility.GlotRequest;
import org.springframework.stereotype.Service;

@Service
public class CodeServiceImpl implements CodeService{

    @Override
    public CodeResponse createCode(Code codigo) {

        GlotRequest gr = new GlotRequest(codigo);
        return gr.runCode();
    }


}
