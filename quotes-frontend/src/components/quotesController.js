import React, { useEffect, useState } from "react";
import QuotesView from "./quotesView";
import history from "../history";
import { ErrorBar } from "./common";
import { get } from "../backend";

export default props => {
  let [pageData, setPageData] = useState({});
  let [error, setError] = useState(null);
  useEffect(
    () => {
      get(`/api/quotes?page=${props.activePage}`)
        .then(resp => resp.json())
        .then(data => {
          setPageData(data);
          props.onNewNumberOfPages(data.totalPages);
          setError(null);
        })
        .catch(err => {
          setError(err);
        });
    },
    [props.activePage]
  );

  const navigateToQuote = quoteId => {
    history.push(`/quotes/${quoteId}`);
  };

  if (error) {
    return <ErrorBar>{error.statusText}</ErrorBar>;
  }

  return <QuotesView page={pageData} onQuoteClicked={navigateToQuote} />;
};
