import { DragItem } from "../DragItem";

export const isHidden = (
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string,
  isPreview: boolean | undefined
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};
