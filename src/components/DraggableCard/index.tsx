import React from "react";
import { Card } from "./styled";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function index({ toDo, index }: IDraggableCardProps) {
  console.log(toDo, "rendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided) => (
        <Card ref={provided.innerRef} {...provided.draggableProps}>
          <span {...provided.dragHandleProps}>🛹</span>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

// 위치가 변경되는 카드만 렌더링 되도록
export default React.memo(index);
