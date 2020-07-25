import React, { CSSProperties } from "react";
import { XYCoord, useDragLayer } from "react-dnd";

import { CustomDragLayerContainer } from "./styles";
import { Column } from "./Column";

export const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  const getItemStyles = (offset: XYCoord | null): CSSProperties => {
    if (!offset) return { display: "none" };

    const { x, y } = offset;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      transform,
      WebkitTransform: transform,
    };
  };

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column id={item.id} text={item.text} index={item.index} />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};
