import { Dispatch, Ref, SetStateAction, forwardRef, useCallback } from "react";
import { ConnectDropTarget, useDrag, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

type TProps = {
  setCards: Dispatch<SetStateAction<TItem[]>>;
  index: number;
};

type TItem = {
  id: number;
  text: string;
};

const useDnd = ({ setCards, index }: TProps) => {
  console.log("실행");
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: TItem[]) => {
      const newCards = [...prevCards];
      const [draggedCard] = newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, draggedCard);

      return newCards;
    });
  }, []);

  const [, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
    accept: "MENU",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      // if (!ref) return;
      // if (typeof ref !== "function") return;
      console.log("드롭 탐색중", index, item.index);

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

      console.log("!&^&@^!&^");
      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  return { drop };

  // return <div ref={ref}>{/* Your drop zone content */}</div>;
};

export default useDnd;
