import styled from "styled-components";

const Container = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Check = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

export { Container, Check };
