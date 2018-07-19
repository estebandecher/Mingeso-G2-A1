package com.app.mingeso.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CodeResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_coderes;
    private String stderr;
    private String stdout;

    public CodeResponse(String stderr, String stdout) {
        this.stderr = stderr;
        this.stdout = stdout;
    }

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

    public Long getId_coderes() {
        return id_coderes;
    }

    public void setId_coderes(Long id_coderes) {
        this.id_coderes = id_coderes;
    }
}
