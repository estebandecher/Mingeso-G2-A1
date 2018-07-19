package com.app.mingeso.service;

import com.app.mingeso.model.Code;
import com.app.mingeso.model.CodeResponse;
import org.json.JSONObject;

public interface CodeService {

    CodeResponse createCode (Code codigo);
}
