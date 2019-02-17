package se.knowit.quotesapiexample;

public class GetQuoteDto {
    private final String id;
    private final String quote;
    private final String author;

    private GetQuoteDto(String id, String quote, String author) {
        this.id = id;
        this.quote = quote;
        this.author = author;
    }

    public static GetQuoteDto of(Quote quote) {
        return new GetQuoteDto(quote.getId().toString(), quote.getQuote(), quote.getAuthor());
    }

    public String getId() {
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
        return "GetQuoteDto{" +
                "id='" + id + '\'' +
                ", quote='" + quote + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
