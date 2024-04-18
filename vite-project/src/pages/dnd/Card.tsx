import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";

type TProps = {
  index: number;
  item: {
    id: number;
    text: string;
  };
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

const Card = ({ index, item, moveCard }: TProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { id, text } = item;

  const [{ isDragging }, drag] = useDrag({
    type: "MENU",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, drop] = useDrop<
    TDragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "MENU",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingReact = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingReact.bottom - hoverBoundingReact.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingReact.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {text}
    </div>
  );
};

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  cursor: "move",
  width: "200px",
};

export default Card;
