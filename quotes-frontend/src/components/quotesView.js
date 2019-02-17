import React from "react";
import styled from "styled-components";

export default ({ page, onQuoteClicked }) => {
  const createCard = quoteObj => {
    const Card = quoteObj.quote.length > 100 ? WideCard : BasicCard;
    return (
      <Card key={quoteObj.id} onClick={() => onQuoteClicked(quoteObj.id)}>
        <Quote>{quoteObj.quote}</Quote>
        <br />
        <Author>- {quoteObj.author}</Author>
      </Card>
    );
  };

  return (
    <QuotesContainer>
      {page.quotes && page.quotes.map(quoteObj => createCard(quoteObj))}
    </QuotesContainer>
  );
};

const QuotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
  grid-auto-rows: 10em;
  align-content: center;
  grid-gap: 1em;
  padding: 0 2vw;
  width: 96vw;
  grid-auto-flow: dense;
`;

const BasicCard = styled.div`
  overflow-wrap: break-word;
  box-shadow: 2px 2px grey
  padding: 0.2em;
  
  border: 1px solid grey;
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

const WideCard = styled(BasicCard)`
  grid-column: span 2;
`;

const Quote = styled.span`
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
