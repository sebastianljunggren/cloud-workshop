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
    <Grid>
      <Header>
        <h1>Quotes</h1>
        <Link to="/quotes/new">
          <Button name="plus-square" size="2x" />
        </Link>
      </Header>
      <Page
        activePage={activePage}
        onNewNumberOfPages={setTotalNumberOfPages}
      />
      <Footer>
        <Paginator
          activePage={activePage}
          totalNumberOfPages={totalNumberOfPages}
        />
      </Footer>
    </Grid>
  );
};

const Grid = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  grid-template-areas:
    "h h h h h"
    "c c c c c"
    "f f f f f";
`;

const Header = styled.div`
  grid-area: h;
`;

const Footer = styled.div`
  grid-area: f;
  text-align: center;
  margin: 2em 0;
  padding: 2em 0;
  border-top: 1px dashed grey;
`;
