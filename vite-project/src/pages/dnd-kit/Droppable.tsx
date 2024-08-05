import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import styled from "styled-components";
import { TData } from ".";

const ID = "droppable-list";

const Droppable = ({ items }: { items: TData[] }) => {
  const { setNodeRef } = useDroppable({ id: ID });
  const idList = items.map((item) => item.menuNo);

  return (
    <SortableContext id={ID} items={idList} strategy={rectSortingStrategy}>
      <S.DroppableUl ref={setNodeRef}>
        {items.map((item) => (
          <SortableItem key={item.menuNo} item={item} />
        ))}
      </S.DroppableUl>
    </SortableContext>
  );
};

export default Droppable;

const S = {
  DroppableUl: styled.ul`
    min-width: 110px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 5px;
    padding: 20px 10px;
    list-style-type: none;
    border: 1px solid black;
    background-color: #3e3e3e;
  `,
};
