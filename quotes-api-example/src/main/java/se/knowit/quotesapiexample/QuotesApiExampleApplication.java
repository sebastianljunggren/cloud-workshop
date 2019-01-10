package se.knowit.quotesapiexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.reactive.error.DefaultErrorAttributes;
import org.springframework.boot.web.reactive.error.ErrorAttributes;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.request.RequestAttributes;

import java.util.Map;

@SpringBootApplication
public class QuotesApiExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuotesApiExampleApplication.class, args);
	}

}

