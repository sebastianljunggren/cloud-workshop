package se.knowit.quotesapiexample;

public class SaveQuoteDto {
    private String quote;
    private String author;

    public SaveQuoteDto() {
    }

    public SaveQuoteDto(String quote, String author) {
        this.quote = quote;
        this.author = author;
    }

    public static SaveQuoteDto of(Quote quote) {
        return new SaveQuoteDto(quote.getQuote(), quote.getAuthor());
    }

    public Boolean isValid() {
        return this.quote != null && this.author != null && !this.quote.isEmpty() && !this.author.isEmpty();
    }

    public String getQuote() {
        return quote;
    }

    public String getAuthor() {
        return author;
    }
}
