import { Check, Container } from "./style";

function ListItem({ name, onChange }) {
  return (
    <Container>
      <span>{name}</span>
      <Check onChange={onChange}/>
    </Container>
  );
}

export default ListItem;
