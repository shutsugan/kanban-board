import React, { useRef } from "react";
import { useDrop } from "react-dnd";

import { CardContainer } from "./styles";
import { CardDragItem } from "./DragItem";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./utils/useItemDrag";

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
}

export const Card = ({ text, index, id, columnId }: CardProps) => {
  const currentCard = useRef<HTMLDivElement>(null);
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: "MOVE_TASK",
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });

      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });

  const drag = useItemDrag({ type: "CARD", id, index, text, columnId });
  drag(drop(currentCard));

  return <CardContainer ref={currentCard}>{text}</CardContainer>;
};
