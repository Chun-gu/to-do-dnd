import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {() => (
            <ul>
              <Draggable draggableId="first-item" index={0}>
                {() => <li>first</li>}
              </Draggable>
              <Draggable draggableId="second-item" index={1}>
                {() => <li>second</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default App;
