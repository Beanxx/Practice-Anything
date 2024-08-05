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
      {item.menuNo} {item.menuName}
    </S.Item>
  );
};

export default SortableItem;

const S = {
  Item: styled.li<{ $isDragging: boolean }>`
    width: 110px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    background-color: gray;
    border: 1px solid gray;
    cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  `,
};
