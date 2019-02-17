package se.knowit.quotesapiexample;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
@RestControllerAdvice
public class QuotesController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QuotesController.class);
    private static final int PAGE_SIZE = 20;

    @Autowired
    QuotesRepository quotesRepo;

    @GetMapping("/quotes/{id}")
    public GetQuoteDto getQuoteById(@PathVariable Long id) {
        return GetQuoteDto.of(
                quotesRepo.findById(id).orElseThrow(() -> new QuoteNotFoundException(id))
        );
    }

    @GetMapping("/quotes")
    public GetQuotesDto getQuotes(@RequestParam Optional<Integer> page) {
        Pageable pageable = PageRequest.of(page.orElse(0), PAGE_SIZE);
        LOGGER.info("Listing quotes for page {}", pageable);
        var quotesPage = quotesRepo.findAll(pageable);
        return GetQuotesDto.of(quotesPage);
    }

    @PostMapping("/quotes")
    @ResponseStatus(HttpStatus.CREATED)
    public GetQuoteDto postQuote(@RequestBody SaveQuoteDto quote) {
        LOGGER.info("Creating quote {}", quote);
        if (quote.isValid()) {
            return GetQuoteDto.of(
                    quotesRepo.save(new Quote(quote.getQuote(), quote.getAuthor()))
            );
        } else {
            throw new SaveQuoteException(quote);
        }
    }

    @PutMapping("/quotes/{id}")
    public GetQuoteDto putQuote(@PathVariable Long id, @RequestBody SaveQuoteDto updatedQuote) {
        LOGGER.info("Updating quote {} to {}", id, updatedQuote);
        return GetQuoteDto.of(
                quotesRepo.findById(id)
                        .map(quote -> {
                            if (updatedQuote.isValid()) {
                                quote.setQuote(updatedQuote.getQuote());
                                quote.setAuthor(updatedQuote.getAuthor());
                                return quotesRepo.save(quote);
                            } else {
                                throw new SaveQuoteException(updatedQuote);
                            }
                        }).orElseThrow(() -> new QuoteNotFoundException(id))
        );
    }

    @ExceptionHandler(SaveQuoteException.class)
    public ResponseEntity myError(SaveQuoteException exception) {

        ErrorDto error = new ErrorDto<>(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                exception.getQuote()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

}
