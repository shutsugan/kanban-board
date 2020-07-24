import React, { useState } from 'react';

import { NewItemForm } from './NewItemForm';
import { AddItemButton } from './styles';

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  const handleShowForm = () => setShowForm(true);
  const handleOnAdd = (text: string) => {
    onAdd(text);
    setShowForm(false);
  };

  return (
    <>
      {showForm && <NewItemForm onAdd={handleOnAdd} />}
      <AddItemButton dark={dark} onClick={handleShowForm}>
        {toggleButtonText}
      </AddItemButton>
    </>
  )
};
