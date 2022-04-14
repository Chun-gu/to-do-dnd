import { useRecoilState } from "recoil";
import { toDoState } from "../../atoms";
import DroppableBoard from "../DroppableBoard";
import * as Styled from "./styled";

const Index = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  return (
    <Styled.Container>
      {Object.keys(toDos).map((boardId) => (
        <DroppableBoard
          key={boardId}
          boardId={boardId}
          toDos={toDos[boardId]}
        />
      ))}
    </Styled.Container>
  );
};

export default Index;
