import React, { useEffect, useState } from "react";
import { ErrorBar } from "./common";
import QuoteView from "./quoteView";
import { get, put } from "../backend";

export default ({ match }) => {
  let [quoteData, setQuoteData] = useState({});
  let [isEditing, setIsEditing] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [editedQuote, setEditedQuote] = useState(quoteData.quote);
  let [editedAuthor, setEditedAuthor] = useState(quoteData.author);

  const getQuote = async url => {
    try {
      const resp = await get(`/api/quotes/${match.params.quoteId}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      await setError(`Could nog get quote - ${error}`);
    }
  };

  const putQuote = async (url, object) => {
    try {
      let resp = await put(url, object);
      let body = await resp.json();
      return body;
    } catch (error) {
      await setError(`Could not update quote - ${error}`);
      await setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuote().then(data => {
      setQuoteData(data);
      setEditedQuote(data.quote);
      setEditedAuthor(data.author);
    });
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const updateEdits = async () => {
    let editObject = null;
    if (quoteData.quote !== editedQuote) {
      editObject = {
        ...editObject,
        quote: editedQuote
      };
    }
    if (quoteData.author !== editedAuthor) {
      editObject = {
        ...editObject,
        author: editedAuthor
      };
    }
    if (editObject) {
      await setIsLoading(true);
      let data = await putQuote(`/api/quotes/${quoteData.id}`, editObject);
      await setQuoteData(data);
      await setIsEditing(false);
      await setIsLoading(false);
    }
  };

  const fieldEdit = event => {
    switch (event.target.name) {
      case "quote":
        setEditedQuote(event.target.value);
        break;
      case "author":
        setEditedAuthor(event.target.value);
        break;
      default:
        console.log("Editing non existing field.");
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {error && <ErrorBar>{error}</ErrorBar>}

      <QuoteView
        quoteData={quoteData}
        editButtonPressed={toggleEdit}
        saveEditedChanges={updateEdits}
        isEditing={isEditing}
        onFieldEdit={fieldEdit}
        editedQuote={editedQuote}
        editedAuthor={editedAuthor}
      />
    </>
  );
};
