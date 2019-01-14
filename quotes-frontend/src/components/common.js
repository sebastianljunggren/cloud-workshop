import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

const UnstyledLink = styled(Link)`
  color: black;
`;

const Button = styled(FontAwesome)`
  margin: 0.2em;
  &:hover {
    color: gray;
  }

  &:active {
    position: relative;
    color: gray;
    top: 2px;
    left: 2px;
  }
`;

const ErrorBar = styled.div`
  padding: 0.3em 1em;
  background-color: tomato;
  color: white;
`;

export { UnstyledLink, Button, ErrorBar };
