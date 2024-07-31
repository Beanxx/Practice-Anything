import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDndContext,
  useSensor,
  useSensors,
  DndContext,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
import Droppable from "./Droppable";
import { insertAtIndex, removeAtIndex } from "../../utils/array";
import styled from "styled-components";

export type TItemGroups = {
  [key: string]: string[];
};

const DndKit = () => {
  const dndContext = useDndContext();

  const [itemGroups, setItemGroups] = useState<TItemGroups>({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    // group3: ["7", "8", "9"],
  });

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }: { active: any }) => {
    setActiveId(active.id);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const handleDragOver = ({ active, over }: { active: any; over: any }) => {
    const overId = over?.id;

    if (!overId) return;

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups: any) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex =
          over.id in itemGroups
            ? itemGroups[overContainer].length + 1
            : over.data.current.sortable.index;

        return moveBetweenContainers({
          items: itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          item: active.id,
        });
      });
    }
  };

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex =
        over.id in itemGroups
          ? itemGroups[overContainer].length + 1
          : over.data.current.sortable.index;

      setItemGroups((itemGroups: any) => {
        let newItems;

        if (activeContainer === overContainer) {
          newItems = {
            ...itemGroups,
            [overContainer]: arrayMove(
              itemGroups[overContainer],
              activeIndex,
              overIndex
            ),
          };
        } else {
          newItems = moveBetweenContainers({
            items: itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            item: active.id,
          });
        }

        return newItems;
      });
    }

    setActiveId(null);
  };

  type TMove = {
    items: any;
    activeContainer: any;
    activeIndex: number;
    overContainer: any;
    overIndex: number;
    item: any;
  };
  const moveBetweenContainers = ({
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item,
  }: TMove) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <S.Container>
        {Object.keys(itemGroups).map((group) => (
          <Droppable id={group} items={itemGroups[group]} key={group} />
        ))}
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
