import React, { useState, ChangeEvent } from 'react';

import {
  NewItemFormContainer,
  NewItemInput,
  NewItemButton
} from './styles';

interface NewItemFormProps {
  onAdd(text: string): void
};

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState('');
  const { onAdd } = props;

  const handleClick = () => onAdd(text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={handleChange} />
      <NewItemButton onClick={handleClick}>Create</NewItemButton>
    </NewItemFormContainer>
  )
};
