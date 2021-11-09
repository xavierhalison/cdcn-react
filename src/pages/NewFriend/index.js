import { MainCta } from "components/common/cta";
import { FormGroup, Input, Label, TextBox } from "components/common/form";
import { useNavigate } from "react-router";
import { Container } from "./style";

function NewFriend() {
  const navigate = useNavigate();

  return (
    <Container>
      <FormGroup>
        <Label>Nome: </Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>Contato: </Label>
        <Input />
      </FormGroup>
      <MainCta onClick={() => navigate("/")}>Adicionar</MainCta>
    </Container>
  );
}

export default NewFriend;
