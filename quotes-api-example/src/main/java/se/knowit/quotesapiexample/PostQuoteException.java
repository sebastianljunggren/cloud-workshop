package se.knowit.quotesapiexample;

public class PostQuoteException extends RuntimeException {
    private Quote quote = new Quote(null, "Don't Panic.", "The Hitchhikers Guide to the Galaxy");
    private String message = "Could not create quote";


    public Quote getQuote() {
        return quote;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
