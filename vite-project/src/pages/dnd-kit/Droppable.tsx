import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import styled from "styled-components";

const ID = "droppable-list";

const Droppable = ({ items }: { items: string[] }) => {
  const { setNodeRef } = useDroppable({ id: ID });

  return (
    <SortableContext id={ID} items={items} strategy={rectSortingStrategy}>
      <S.DroppableUl ref={setNodeRef}>
        {items.map((item: string) => (
          <SortableItem key={item} id={item} />
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
