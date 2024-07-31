import { Dispatch, Ref, SetStateAction, useEffect, useRef } from "react";
import { ConnectDropTarget, useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";
import useDnd from "./useDnd";

type TItem = {
  id: number;
  text: string;
};

type TProps = {
  index: number;
  item: {
    id: number;
    text: string;
  };
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onDrop: (ref: ConnectDropTarget) => void;
  setCards: Dispatch<SetStateAction<TItem[]>>;
};

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

const Card = ({ index, item, moveCard, onDrop, setCards }: TProps) => {
  // const ref = useRef<HTMLDivElement>(null);

  const { id, text } = item;

  const [{ isDragging, didDrop }, drag] = useDrag({
    type: "MENU",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      didDrop: monitor.didDrop(),
    }),
  });

  id === 1 && console.log(text, didDrop);

  // useDnd({ setCards, index });

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
      // if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // const hoverBoundingReact = ref.current?.getBoundingClientRect();

      // const hoverMiddleY =
      //   (hoverBoundingReact.bottom - hoverBoundingReact.top) / 2;

      // const clientOffset = monitor.getClientOffset();

      // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingReact.top;

      // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  id === 1 && console.log("@@", index);

  // useEffect(() => {
  //   // onDrop(drop);
  //   isDragging && handleIdx(index);
  // }, [isDragging, handleIdx, index]);

  // drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drop} style={{ backgroundColor: "gray", padding: "10px" }}>
      <div ref={drag} style={{ ...style, opacity }}>
        {text}
      </div>
    </div>
  );
};

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  cursor: "move",
  width: "200px",
  backgroundColor: "black",
};

export default Card;
