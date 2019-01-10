package se.knowit.quotesapiexample;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuotesRepository extends PagingAndSortingRepository<Quote, Long>, CrudRepository<Quote, Long> {
}
