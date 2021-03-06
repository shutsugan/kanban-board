import React, { useRef } from "react";
import { useDrop } from "react-dnd";

import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./utils/useItemDrag";
import { DragItem } from "./DragItem";
import { isHidden } from "./utils/isHidden";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}

export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const currentColumn = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover(item: DragItem) {
      if (item.type === "COLUMN") {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) return;

        dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;

        dispatch({
          type: "MOVE_TASK",
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        });

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  const drag = useItemDrag({ type: "COLUMN", id, index, text });
  drag(drop(currentColumn));

  const addTask = (taskText: string) => {
    dispatch({ type: "ADD_TASK", payload: { text: taskText, taskId: id } });
  };

  return (
    <ColumnContainer
      ref={currentColumn}
      isPreview={isPreview}
      isHidden={isHidden(state.draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card
          key={task.id}
          text={task.text}
          columnId={id}
          id={task.id}
          index={index}
        />
      ))}
      <AddNewItem toggleButtonText="+Add another task" dark onAdd={addTask} />
    </ColumnContainer>
  );
};
