import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default ({ activePage, totalNumberOfPages, onPageClicked }) => {
  let pageNumbers = [...Array(totalNumberOfPages).keys()];

  return (
    <>
      {activePage > 0 && (
        <PageButton to={`/?page=${activePage - 1}`}>{"<"}</PageButton>
      )}
      {pageNumbers.map(page => {
        return page === activePage ? (
          <ActivePageButton key={page}>{page}</ActivePageButton>
        ) : (
          <PageButton key={page} to={`/?page=${page}`}>
            {page}
          </PageButton>
        );
      })}
      {activePage < totalNumberOfPages - 1 && (
        <PageButton to={`/?page=${activePage + 1}`}> {">"}</PageButton>
      )}
    </>
  );
};

const PageButton = styled(Link)`
  margin-left: 0.1em;
  margin-right: 0.1em;
  color: blue;
  cursor: pointer;
`;

const ActivePageButton = styled.span`
  font-weight: bold;
  margin-left: 0.1em;
  margin-right: 0.1em;
`;
