package se.knowit.quotesapiexample;

public class SaveQuoteException extends RuntimeException {
    private final SaveQuoteDto quote;
    private static String MESSAGE = "Could not create quote";

    public SaveQuoteException(SaveQuoteDto quote) {
        this.quote = quote;
    }


    public SaveQuoteDto getQuote() {
        return quote;
    }

    @Override
    public String getMessage() {
        return MESSAGE;
    }
}
