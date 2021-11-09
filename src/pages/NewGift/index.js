import { MainCta } from "components/common/cta";
import { FormGroup, Input, Label, TextBox } from "components/common/form";
import { useNavigate, useParams } from "react-router";
import { Container } from "./style";
import { useContext } from "react";
import { RootContext } from "context/context";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";

function NewGift() {
  const { setTitle, gifts, setGifts } = useContext(RootContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { key } = useParams();

  useEffect(() => {
    setTitle("Adicionar Presente");
    if (key) {
      setName(gifts[0].name);
      setDescription(gifts[0].description);
      setTitle("Editar Presente - " + gifts[0].name);
    }
  }, [key]);

  function handleSubmit() {
    let currentGifts = [...gifts];

    if (key) {
      currentGifts[key] = {
        name,
        description,
        checked: false,
        selected: false,
      };
    } else {
      currentGifts.push({ name, description });
    }

    setGifts(currentGifts);
    navigate("/");
  }

  return (
    <Container>
      <FormGroup>
        <Label>Nome: </Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Descrição: </Label>
        <TextBox
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>
      <MainCta onClick={handleSubmit}>
        {key ? "Concluído" : "Adicionar"}
      </MainCta>
    </Container>
  );
}

export default NewGift;
