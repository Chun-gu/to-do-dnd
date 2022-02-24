import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import { Wrapper } from "./components";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    // 동일한 보드 내의 움직임
    if (destination?.droppableId === source.droppableId) {
      setToDos((prevBoards) => {
        const copiedBoard = [...prevBoards[source.droppableId]];
        copiedBoard.splice(source.index, 1);
        copiedBoard.splice(destination?.index, 0, draggableId);
        return {
          ...prevBoards,
          [source.droppableId]: copiedBoard,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // 다른 보드 간의 움직임
      setToDos((prevBoards) => {
        const sourceBoard = [...prevBoards[source.droppableId]];
        const destinationBoard = [...prevBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...prevBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper />
    </DragDropContext>
  );
}

export default App;
