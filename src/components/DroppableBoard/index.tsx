import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import { DraggableCard } from "..";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../../atoms";
import * as Styled from "./styled";

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function Index({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Styled.Container>
      <Styled.Title>{boardId}</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder={`add Task on ${boardId}`}
          {...register("toDo", { required: true })}
        />
      </Styled.Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Styled.Board
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {provided.placeholder}
          </Styled.Board>
        )}
      </Droppable>
    </Styled.Container>
  );
}

export default Index;
