package se.knowit.quotesapiexample;

import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

public class GetQuotesDto {
    private final List<GetQuoteDto> quotes;
    private final long count;

    private GetQuotesDto(List<GetQuoteDto> quotes, long count) {
        this.quotes = quotes;
        this.count = count;
    }

    public static GetQuotesDto of(Page<Quote> quotesPage) {
        var quotes = quotesPage.get()
                .map(GetQuoteDto::of)
                .collect(Collectors.toList());
        return new GetQuotesDto(quotes, quotesPage.getTotalElements());
    }

    public List<GetQuoteDto> getQuotes() {
        return quotes;
    }

    public long getCount() {
        return count;
    }
}
