import React from "react";
import styled from "styled-components";

export default ({ page, onQuoteClicked }) => {
  return (
    <QuotesContainer>
      {page.content &&
        page.content.map(quoteObj => (
          <Card key={quoteObj.id} onClick={() => onQuoteClicked(quoteObj.id)}>
            <Quote>{quoteObj.quote}</Quote>
            <br />
            <Author>- {quoteObj.author}</Author>
          </Card>
        ))}
    </QuotesContainer>
  );
};

const QuotesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  align-content: center;
  height: 100vh;
`;

const Card = styled.div`
  margin 0.3em;
  overflow-wrap: break-word;
  box-shadow: 2px 2px grey
  padding: 0.2em;
  
  border: 1px solid grey;
  width: 10em;
  min-height: 10em;
  display: flex;
  flex-grow: auto;
  flex-direction: column;
  &:hover {
    box-shadow: 3px 3px grey;
  }
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
    left: 3px;
  }
  
`;
const Quote = styled.span`
  max-width: 40em;
  display: block;
  word-wrap: break-word;
  flex: 3;
  text-overflow: ellipsis
  overflow: hidden;
  
`;
const Author = styled.span`
  font-style: italic;
  color: grey;
  flex: 1;
`;
