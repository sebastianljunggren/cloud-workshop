package se.knowit.quotesapiexample;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id", nullable = false, unique = true)
    private Long id;
    @Column(name="Quote", length = 1000)
    private String quote;
    @Column(name="Author")
    private String author;

    public Quote() {}

    public Quote(String quote, String author) {
        this.quote = quote;
        this.author = author;
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
