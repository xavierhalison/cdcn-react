import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;

  > .icon {
    position: absolute;
    left: 20px;
  }
`;

const Title = styled.h4`
  text-align: center;
`;

const Content = styled.div`
  width: 100vw;
  height: 92vh;
  overflow: scroll
`;

export { Container, Header, Title, Content};
