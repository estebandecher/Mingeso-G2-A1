package com.app.mingeso.model;


import javax.persistence.Entity;

@Entity
public class CodeResponse {

    private String stderr;
    private String stdout;

    public String getStderr() {
        return stderr;
    }

    public void setStderr(String stderr) {
        this.stderr = stderr;
    }

    public String getStdout() {
        return stdout;
    }

    public void setStdout(String stdout) {
        this.stdout = stdout;
    }


}
