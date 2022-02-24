import { useRecoilState } from "recoil";
import { toDoState } from "../../atoms";
import DroppableBoard from "../DroppableBoard";
import { Boards } from "../DroppableBoard/styled";
import { Wrapper } from "./styled";

const Index = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  return (
    <Wrapper>
      <Boards>
        {Object.keys(toDos).map((boardId) => (
          <DroppableBoard
            key={boardId}
            boardId={boardId}
            toDos={toDos[boardId]}
          />
        ))}
      </Boards>
    </Wrapper>
  );
};

export default Index;
