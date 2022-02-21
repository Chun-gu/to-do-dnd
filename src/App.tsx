import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "./components/Board/styled";
import { Card } from "./components/Card/styled";

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <Board ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <Draggable draggableId={toDo} index={index}>
                {(provided) => (
                  <Card ref={provided.innerRef} {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>🛹</span>
                    {toDo}
                  </Card>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Board>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
