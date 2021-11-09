import { RootContext } from "context/context";
import { useContext } from "react";
import { Container, Content, Header, Title } from "./style";
import { Menu } from "react-feather";

function Layout({ children }) {
  const { title } = useContext(RootContext);

  return (
    <Container>
      <Header>
        <Menu className="icon" />
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
