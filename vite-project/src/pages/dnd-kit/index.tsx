import {
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DndContext,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import Droppable from "./Droppable";
import styled from "styled-components";

const DndKit = () => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const [items, setItems] = useState<TData[]>([]);

  useEffect(() => {
    data && setItems(data);
  }, [data]);

  const itemData = items.map((item) => String(item.menuNo));

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

// --------------------

export type TData = {
  menuNo: number;
  menuName: string;
  menuImg: string;
  applyProd: boolean;
  applyDevelop: boolean;
  seq: number;
  createdAt: number[];
};

const data = [
  {
    menuNo: 26,
    menuName: "🥨",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/eNPo0m/ic_attend_check.png",
    applyProd: true,
    applyDevelop: true,
    seq: 1,
    createdAt: [2024, 4, 8, 17, 5, 48],
  },
  {
    menuNo: 88,
    menuName: "a",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/wkHcMY/ic_charge_point_main.png",
    applyProd: false,
    applyDevelop: false,
    seq: 2,
    createdAt: [2024, 6, 18, 16, 0, 14],
  },
  {
    menuNo: 98,
    menuName: "b",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/y3JAHQ/ic_vote_main.png",
    applyProd: true,
    applyDevelop: true,
    seq: 3,
    createdAt: [2024, 6, 19, 14, 32],
  },
  {
    menuNo: 122,
    menuName: "c",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/pAiAfD/testt.png",
    applyProd: true,
    applyDevelop: true,
    seq: 4,
    createdAt: [2024, 6, 25, 15, 38, 54],
  },
  {
    menuNo: 75,
    menuName: "d",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/AbEqE6/ic_research_main.png",
    applyProd: false,
    applyDevelop: false,
    seq: 5,
    createdAt: [2024, 4, 30, 10, 29, 30],
  },
  {
    menuNo: 72,
    menuName: "e",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/Zk6ZHV/ic_participate_main.png",
    applyProd: false,
    applyDevelop: false,
    seq: 6,
    createdAt: [2024, 4, 26, 18, 29, 34],
  },
  {
    menuNo: 125,
    menuName: "f",
    menuImg:
      "https://cdn.v3.dev.myd.world/3311de24464c894f1b0638ebaf5df925/images/cF73Jw/ic_life_estimate.png",
    applyProd: true,
    applyDevelop: true,
    seq: 7,
    createdAt: [2024, 7, 15, 15, 25, 8],
  },
];
