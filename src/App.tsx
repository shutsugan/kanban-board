import React from 'react';

import { Column } from './Column';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { AppContainer } from "./styles";

import './App.css';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Type script learning" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
