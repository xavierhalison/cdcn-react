import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const TextBox = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const Label = styled.label`
  margin-bottom: 6px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export { Input, TextBox, Label, FormGroup };
