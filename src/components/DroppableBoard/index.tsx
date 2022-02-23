import { Droppable } from "react-beautiful-dnd";
import { Boards, Board } from "./styled";
import { DraggableCard } from "..";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../atoms";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}
function Index({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} index={index} toDo={toDo} />
          ))}
          {provided.placeholder}
        </Board>
      )}
    </Droppable>
  );
}

export default Index;
