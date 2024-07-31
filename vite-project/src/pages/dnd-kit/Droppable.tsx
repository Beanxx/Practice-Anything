import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import styled from "styled-components";

type TProps = {
  id: string;
  items: string[];
};

const Droppable = ({ id, items }: TProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <S.DroppableUl ref={setNodeRef}>
        {items.map((item: any) => (
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
    padding: 20px 10px;
    border: 1px solid black;
    border-radius: 5px;
    list-style-type: none;
    background-color: #3e3e3e;
  `,
};
