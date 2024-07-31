import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";

type TProps = {
  id: string;
};

const SortableItem = ({ id }: TProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <S.Item style={style} ref={setNodeRef} {...attributes} {...listeners}>
      Item {id}
    </S.Item>
  );
};

export default SortableItem;

const S = {
  Item: styled.li`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 110px;
    height: 30px;
    margin-bottom: 5px;
    padding-left: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    user-select: none;
    background-color: gray;
  `,
};
