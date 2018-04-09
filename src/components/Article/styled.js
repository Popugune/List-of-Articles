import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;

  h1 {
    font-weight: bold;
    font-size: 1.5em;
    margin: 15px;
  }
  p {
    display: ${p => (p.isOpen ? "block" : "none")}
    margin: 10px;
  }
  button {
    width: 100px;
    padding: 10px;
    border: none;
    align-self: flex-end;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;
