import React from "react";

import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";

function App() {
  const { state, dispatch } = useAppState();

  const addList = (text: string) => {
    dispatch({ type: "ADD_LIST", payload: text });
  };

  return (
    <AppContainer>
      {state.lists.map((list, index) => (
        <Column key={list.id} text={list.text} index={index} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={addList} />
    </AppContainer>
  );
}

export default App;
