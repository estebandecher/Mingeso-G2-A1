package com.app.mingeso.controller;


import com.app.mingeso.model.Code;
import com.app.mingeso.model.CodeResponse;
import com.app.mingeso.model.Problem;
import com.app.mingeso.service.CodeService;
import com.app.mingeso.utility.GlotRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/coding")
public class CodeController {

    private final CodeService codeService;

    public CodeController(CodeService codeService) {
        this.codeService = codeService;
    }

    @PostMapping
    public CodeResponse runCode(@Valid @RequestBody Code code) {
        return codeService.createCode(code);
    }


}
