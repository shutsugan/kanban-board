import styled from 'styled-components';

interface AddItemButtonProps {
  dark?: boolean
};

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #3179ba;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  align-self: flex-start;
  flex-grow: 0;
  width: 300px;
  min-height: 4Opx;
  border-radius: 3px;
  margin-right: 20px;
  padding: 8px;
  background: #ddd;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 20px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  border-radius: 3px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 8px;
  padding: 8px 16px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  align-self: flex-start;
  background: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85s ease-in;
  width: 100%;
  &:hover {
    background: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 16px;
  margin-bottom: 8px;
`;

export const NewItemButton = styled.button`
  background: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 8px;
  padding: 8px 16px;
  width: 100%;
`;
