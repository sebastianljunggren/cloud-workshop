import React, { useEffect, useState } from "react";
import PageView from "./PageView";
import history from "../history";

export default props => {
  let [pageData, setPageData] = useState({});
  useEffect(
    () => {
      fetch(`/api/quotes?page=${props.activePage}`)
        .then(resp => resp.json())
        .then(data => {
          setPageData(data);
          props.onNewNumberOfPages(data.totalPages);
        });
    },
    [props.activePage]
  );

  const navigateToQuote = quoteId => {
    console.log(quoteId);
    history.push(`/quotes/${quoteId}`);
  };

  return <PageView page={pageData} navigateToQuote={navigateToQuote} />;
};
