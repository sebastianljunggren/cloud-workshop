import React, { useState } from "react";
import styled from "styled-components";
import FileDrop from "react-file-drop";
import history from "../history";

import { ErrorBar } from "./common";
import { post } from "../backend";

export default ({ visible, hideModalAction }) => {
  const fr = new FileReader();

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const doUpload = () => {
    console.log(`Uploading ${selectedFile}`);
    console.log(selectedFile);
    fr.onloadend = event => {
      console.log(event);
      const content = fr.result;
      try {
        let quotes = JSON.parse(content);
        console.log(quotes);

        quotes.forEach(quote => {
          post("/api/quotes", quote);
        });

        history.push("/");
        setSelectedFile(null);
        hideModalAction();
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fr.readAsText(selectedFile);
  };

  const fileDropped = (files, e) => {
    console.log("File drop occured", files, e);
    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
  };

  const ModalContainer = visible ? ModalContainerVisible : ModalContainerHidden;

  return (
    <ModalContainer onClick={hideModalAction}>
      <Modal onClick={e => e.stopPropagation()}>
        <h1>Upload quotes</h1>
        <input
          type="file"
          id="selectedFile"
          style={{ display: "none" }}
          onChange={event => setSelectedFile(event.target.files[0])}
        />
        <input
          type="button"
          value="Upload"
          onClick={doUpload}
          disabled={!selectedFile}
        />
        <input
          type="button"
          value="Browse..."
          onClick={() => document.getElementById("selectedFile").click()}
        />
        {error && <ErrorBar>{error}</ErrorBar>}
        <p>
          {selectedFile ? `File: ${selectedFile.name}` : "No file selected"}
        </p>
        <div onClick={() => document.getElementById("selectedFile").click()}>
          <DropField onDrop={fileDropped}>Drop file</DropField>
        </div>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainerVisible = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`;

const ModalContainerHidden = styled(ModalContainerVisible)`
  display: none;
`;

const Modal = styled.section`
  position: fixed;
  background: white;
  width: 50%;
  height: auto;
  padding: 2em 2em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DropField = styled(FileDrop)`
  margin-top: 1em;
  background: lightgrey;
  width: auto;
  border: 3px dashed grey;
  font-size: 2em;
  font-weight: bold;
  color: grey;
  font-style: italic;
  padding: 2em;

  &:hover {
    background: #d3d3d3d3;
    border-color: #808080d3;
    color: #808080d3;
  }
`;
