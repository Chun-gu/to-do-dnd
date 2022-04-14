import styled from "styled-components";
import colors from "../../styles/colors";
interface ICardProps {
  isDragging: boolean;
}

export const Card = styled.li<ICardProps>`
  width: 100%;
  height: 30px;
  background-color: ${(props) =>
    props.isDragging ? `${colors.blue80}` : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "5px 10px 10px 5px rgba(0, 0, 0, 0.3)" : "none"};
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;