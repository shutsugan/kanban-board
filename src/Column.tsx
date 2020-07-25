import React from "react";

import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({
  text,
  index,
  id,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();

  const addTask = (taskText: string) => {
    dispatch({ type: "ADD_TASK", payload: { text: taskText, taskId: id } });
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem toggleButtonText="+Add another task" dark onAdd={addTask} />
    </ColumnContainer>
  );
};
