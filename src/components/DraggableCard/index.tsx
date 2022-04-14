import React from "react";
import { Draggable } from "react-beautiful-dnd";
import * as Styled from "./styled";

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function index({ toDoId, index, toDoText }: IDraggableCardProps) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(provided, snapshot) => (
        <Styled.Card
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
        </Styled.Card>
      )}
    </Draggable>
  );
}

// 위치가 변경되는 카드만 렌더링 되도록
export default React.memo(index);
