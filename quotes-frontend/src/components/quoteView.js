import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./common";

export default ({
  quoteData,
  editButtonPressed,
  saveEditedChanges,
  isEditing,
  onFieldEdit,
  editedQuote,
  editedAuthor
}) => {
  const EditButton = isEditing ? ActiveButton : Button;

  return (
    <>
      <Header>
        <Link to="/">
          <Button name="arrow-left" size="2x" />
        </Link>
        {isEditing && (
          <SaveEditButton onClick={saveEditedChanges} name="save" size="2x" />
        )}
        <EditButton onClick={editButtonPressed} name="edit" size="2x" />
      </Header>
      <Container>
        {isEditing ? (
          <>
            <EditQuote
              type="text"
              name="quote"
              value={editedQuote}
              onChange={onFieldEdit}
              placeholder="Quote"
            />
            <EditAuthor
              type="text"
              name="author"
              value={editedAuthor}
              onChange={onFieldEdit}
              placeholder="Author"
            />
          </>
        ) : (
          <>
            <Quote>{quoteData.quote}</Quote>
            <Author>- {quoteData.author}</Author>
          </>
        )}
      </Container>
    </>
  );
};

const Header = styled.div`
  height: 0;
  display: flex;
`;

const SaveEditButton = styled(Button)`
  color: green;
`;

const ActiveButton = styled(Button)`
  color: gray;
  position: relative;
  top: 1px
  left: 1px;

  &:hover {
    color: darkgrey;
  }

  &:active {
    position: relative;
    color: darkgrey;
    top: 2px;
    left: 2px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 99vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: italic;
`;

const Quote = styled.span`
  font-size: 3em;
  padding 0 2em;
  color: lightslategrey;
  margin-bottom: 1em;
`;

const EditQuote = styled.input`
  font-size: 3em;
  padding 0 2em;
  color: lightslategrey;
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid grey;
  text-align: center;
  font-style: italic;
`;

const Author = styled.span`
  color: lightgrey;
  font-size: 1.8em;
`;

const EditAuthor = styled.input`
  color: lightgrey;
  font-size: 1.8em;
  padding 0 2em;
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid grey;
  text-align: center;
  font-style: italic;
`;
