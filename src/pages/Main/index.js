import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { MainCta } from "../../components/common/cta";
import {
  Container,
  EmptyImg,
  EmptyText,
  EmptyContainer,
  ActionsMenu,
  Action,
} from "./style";
import { RootContext } from "../../context/context";
import { Check, Edit, Layers, Trash } from "react-feather";
import ListItem from "../../components/ListItem";
import { useState } from "react";

function Main() {
  const { setTitle, gifts, setGifts } = useContext(RootContext);
  const navigate = useNavigate();

  const [selectedItens, setSelectedItens] = useState([]);

  useEffect(() => {
    setTitle("Chá de Casa Nova");
  });

  function handleRemoveGift() {
    let toKeep = gifts.filter(({ selected }) => !selected);

    setGifts(toKeep);
  }

  function selectItem(key, enable) {
    let currentGifts = [...gifts];
    currentGifts[key].selected = enable;

    setGifts(currentGifts);
  }

  function handleEdit() {
    const selected = gifts.filter(({ selected }) => selected)[0];
    const key = gifts.indexOf(selected);

    navigate(`/edit-gift/${key}`);
  }

  const hasGifts = !!gifts.length;
  const hasSelectedItens = () =>
    !!gifts.filter(({ selected }) => selected).length;
  const oneSelected = () =>
    gifts.filter(({ selected }) => selected).length === 1;

  return (
    <>
      <Container>
        {hasGifts ? (
          <>
            <h4>Presentes</h4>
            {gifts.map(({ name, description }, key) => (
              <ListItem
                key={key}
                name={name}
                onChange={(e) => selectItem(key, e.target.checked)}
              />
            ))}
          </>
        ) : (
          <EmptyContainer>
            <EmptyText>
              Texto que será exibido quando não houver dados cadastrados
            </EmptyText>
            <Layers size={100} color={"#999999"} className="empty-icon" />
          </EmptyContainer>
        )}
        <MainCta onClick={() => navigate("/new-gift")}>
          Adicionar Presente
        </MainCta>
      </Container>
      {hasSelectedItens() && (
        <ActionsMenu>
          <Action>
            <Check />
            <span>Marcar</span>
          </Action>
          {oneSelected() && (
            <Action onClick={handleEdit}>
              <Edit />
              <span>Editar</span>
            </Action>
          )}
          <Action onClick={handleRemoveGift}>
            <Trash />
            <span>Remover</span>
          </Action>
        </ActionsMenu>
      )}
    </>
  );
}

export default Main;
