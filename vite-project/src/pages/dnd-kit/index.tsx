import {
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DndContext,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import Droppable from "./Droppable";
import styled from "styled-components";

const DndKit = () => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const [items, setItems] = useState<string[]>(["1", "2", "3", "4", "5"]);

  const moveItem = (
    active: DragEndEvent["active"],
    over: DragEndEvent["over"]
  ) => {
    if (!over) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (!activeData || !overData) return;

    const activeIndex = activeData.sortable.index;
    const overIndex = overData.sortable.index;

    setItems((items) => arrayMove(items, activeIndex, overIndex));
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    moveItem(active, over);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      moveItem(active, over);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <S.Container>
        <Droppable items={items} />
      </S.Container>
    </DndContext>
  );
};

export default DndKit;

const S = {
  Container: styled.div`
    display: flex;
    gap: 10px;
  `,
};
