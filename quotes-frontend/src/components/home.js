import React, { useState, useEffect } from "react";
import styled from "styled-components";
import qs from "query-string";
import Paginator from "./Paginator";
import Page from "./quotesController";
import { Button, UnstyledLink as Link } from "./common";

export default props => {
  let pageParam = parseInt(qs.parse(props.location.search).page);

  const [activePage, setActivePage] = useState(pageParam || 0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  useEffect(
    () => {
      setActivePage(pageParam || 0);
    },
    [pageParam]
  );

  return (
    <App>
      <Container>
        <h1>Quotes</h1>
        <Link to="/quotes/new">
          <Button name="plus-square" size="2x" />
        </Link>
        <Page
          activePage={activePage}
          onNewNumberOfPages={setTotalNumberOfPages}
        />
      </Container>
      <Footer>
        <Paginator
          activePage={activePage}
          totalNumberOfPages={totalNumberOfPages}
        />
      </Footer>
    </App>
  );
};

const App = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  position: absolute;
`;

const Container = styled.div``;

const Footer = styled.div`
  text-align: center;
  grid-row: 3;
  margin: 2em 0;
  padding: 2em 0;
  border-top: 1px dashed grey;
`;
