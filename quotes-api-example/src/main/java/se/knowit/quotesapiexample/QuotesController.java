package se.knowit.quotesapiexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RestControllerAdvice
public class QuotesController {

    @Autowired
    QuotesRepository quotesRepo;

    @GetMapping("/quotes/{id}")
    public Quote getQuoteById(@PathVariable Long id) {
        return quotesRepo.findById(id).orElseThrow(() -> new QuoteNotFoundException(id));
    }

    @GetMapping("/quotes")
    public Page<Quote> getQuotes(Pageable pageParam) {
        System.out.println(pageParam);
        var page = quotesRepo.findAll(pageParam);
        System.out.println(page);
        return page;
    }

    @PostMapping("/quotes")
    @ResponseStatus(HttpStatus.CREATED)
    public Quote postQuote(@RequestBody Quote quote) {
        if (quote.getAuthor() == null || quote.getQuote() == null) {
            throw new PostQuoteException();
        }
        return quotesRepo.save(quote);
    }

    @PutMapping("/quotes/{id}")
    public Quote putQuote(@PathVariable Long id, @RequestBody Quote newQuote) {
        System.out.println(newQuote);
        return quotesRepo.findById(id)
                .map(quote -> {
                    Optional.ofNullable(newQuote.getQuote()).ifPresent(quote::setQuote);
                    Optional.ofNullable(newQuote.getAuthor()).ifPresent(quote::setAuthor);
                    return quotesRepo.save(quote);
                }).orElseThrow(() -> new QuoteNotFoundException(id));
    }

    @ExceptionHandler(PostQuoteException.class)
    public ResponseEntity myError(PostQuoteException exception) {

        ErrorDTO error = new ErrorDTO<>(
                HttpStatus.BAD_REQUEST.value(),
                HttpStatus.BAD_REQUEST.getReasonPhrase(),
                exception.getMessage(),
                exception.getQuote()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST) ;
    }

}
