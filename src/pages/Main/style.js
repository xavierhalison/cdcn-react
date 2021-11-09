import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

const EmptyText = styled.p`
  text-align: center;
`;

const EmptyImg = styled.img``;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px 0;
  justify-content: center;
  align-items: center;

  > .empty-icon {
    margin: 20px;
  }
`;

const ActionsMenu = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  box-shadow: 1px 1px 8px 1px #000000;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    margin-top: 5px;
  }
`;

export { Container, EmptyText, EmptyImg, EmptyContainer, ActionsMenu, Action };
