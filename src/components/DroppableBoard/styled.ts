import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 500px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Form = styled.form``;

interface IBoardProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

export const Board = styled.ul<IBoardProps>`
  flex-grow: 1;
  background-color: ${(props) =>
    props.isDraggingOver
      ? `${colors.grey90}`
      : props.isDraggingFromThis
      ? `${colors.grey70}`
      : props.theme.boardColor};
  transition: background-color 0.3s ease;
`;
