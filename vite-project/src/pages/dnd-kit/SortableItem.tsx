import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { TData } from ".";

const SortableItem = ({ item }: { item: TData }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.menuNo });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <S.Item
      style={style}
      ref={setNodeRef}
      $isDragging={isDragging}
      {...attributes}
      {...listeners}
    >
      {/* {item.menuNo} {item.menuName} */}
      {item.menuName}
    </S.Item>
  );
};

export default SortableItem;

const S = {
  Item: styled.li<{ $isDragging: boolean }>`
    width: 200px;
    padding: 0.5rem 1rem;
    margin: 0.6rem 0;
    text-align: center;
    border-radius: 5px;
    background-color: black;
    border: 1px dashed gray;
    cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
    /* cursor: move; */
  `,
};
