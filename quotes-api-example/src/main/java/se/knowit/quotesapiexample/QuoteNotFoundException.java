package se.knowit.quotesapiexample;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class QuoteNotFoundException extends RuntimeException {
    public QuoteNotFoundException(Long id) {
        super("Could not find quote " + id);
    }
}
