import React, { useState, ChangeEvent } from "react";

import { useFocus } from "./utils/useFocus";
import { NewItemFormContainer, NewItemInput, NewItemButton } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const { onAdd } = props;

  const handleClick = () => onAdd(text);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput ref={inputRef} value={text} onChange={handleChange} />
      <NewItemButton onClick={handleClick}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
