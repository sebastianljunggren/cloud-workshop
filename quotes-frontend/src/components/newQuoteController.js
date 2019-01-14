import React, { useState } from "react";
import QuoteView from "./quoteView";
import history from "../history";
import { ErrorBar } from "./common";
import { post } from "../backend";

export default () => {
  let quoteData = { quote: "", author: "" };
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [editedQuote, setEditedQuote] = useState("");
  let [editedAuthor, setEditedAuthor] = useState("");

  const postQuote = async (url, object) => {
    try {
      let resp = await post(url, object);

      let body = await resp.json();
      return body;
    } catch (error) {
      await setError(`Could not update quote - ${error}`);
      await setIsLoading(false);
      console.log("err", error);
      return null;
    }
  };

  const createQuote = async () => {
    let editObject = { quote: editedQuote, author: editedAuthor };
    if (editObject) {
      await setIsLoading(true);
      let data = await postQuote(`/api/quotes/`, editObject);
      if (data.error) {
        setError(data);
      } else {
        history.push(`/quotes/${data.id}`);
      }
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
    return "Loading...";
  }

  return (
    <>
      {error && (
        <ErrorBar>
          {error.message} - Example format: {JSON.stringify(error.example)}
        </ErrorBar>
      )}
      <QuoteView
        quoteData={quoteData}
        editButtonPressed={null}
        saveEditedChanges={() => createQuote()}
        isEditing={true}
        onFieldEdit={fieldEdit}
        editedQuote={editedQuote}
        editedAuthor={editedAuthor}
      />
    </>
  );
};
