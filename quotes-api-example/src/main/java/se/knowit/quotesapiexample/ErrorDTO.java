package se.knowit.quotesapiexample;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorDTO<T> {
    private final int status;
    private final String error;
    private final String message;
    private final T example;

    public ErrorDTO(Integer status, String error, String message, T example) {
        this.status = status;
        this.error = error;
        this.message = message;
        this.example = example;
    }

    public ErrorDTO(Integer status, String error, String message) {
        this.status = status;
        this.error = error;
        this.message = message;
        this.example = null;
    }

    public int getStatus() {
        return status;
    }

    public String getError() {
        return error;
    }

    public String getMessage() {
        return message;
    }

    public T getExample() {
        return example;
    }
}
