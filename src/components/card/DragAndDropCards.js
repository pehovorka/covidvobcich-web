import React from "react";
import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { MunicipalityCard } from ".";
import { useMunicipalitiesDispatch } from "../../providers/MunicipalitiesProvider";
import { CHANGE_ORDER, CHANGE_LIMIT } from "../../utils/municipalitiesReducer";

export default function DragAndDropCards({ municipalities }) {
  const dispatch = useMunicipalitiesDispatch();
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(municipalities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({ type: CHANGE_ORDER, newOrder: items });
  };

  const handleDateLimitChange = ({ select, code }) => {
    dispatch({
      type: CHANGE_LIMIT,
      code: code,
      selectedLimit: select.target.value,
    });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="municipalities">
        {(provided, snapshot) => (
          <Box {...provided.droppableProps} ref={provided.innerRef} mt={1}>
            {municipalities.map((municipality, index) => (
              <Draggable
                key={municipality.code}
                draggableId={municipality.code.toString()}
                index={index}
              >
                {(provided) => (
                  <Box
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    py={1}
                  >
                    <MunicipalityCard
                      name={municipality.name}
                      code={parseInt(municipality.code)}
                      limit={municipality.limit}
                      index={index}
                      provided={provided}
                      handleDateLimitChange={handleDateLimitChange}
                      isDraggingOver={snapshot.isDraggingOver}
                    />
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
