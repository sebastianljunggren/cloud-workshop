package se.knowit.quotesapiexample;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Quote {

    @Id
    @GeneratedValue
    private final Long id;
    private String quote;
    private String author;

    public Quote(Long id, String quote, String author) {
        this.id = id;
        this.quote = quote;
        this.author = author;
    }

    public Quote() {
        this.id = null;
        this.quote = null;
        this.author = null;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public String getQuote() {
        return quote;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String toString() {
        return "Quote{" +
                "id='" + id + '\'' +
                ", quote='" + quote + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
