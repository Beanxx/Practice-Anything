import { useCallback, useState } from "react";
import Card from "./Card";
import { ConnectDropTarget, useDrop } from "react-dnd";
import { Identifier, XYCoord } from "dnd-core";
import useDnd from "./useDnd";

type TItem = {
  id: number;
  text: string;
};

type TDragItem = {
  index: number;
  id: string;
  type: string;
};

const Dnd = () => {
  const [cards, setCards] = useState(items);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: TItem[]) => {
      const newCards = [...prevCards];
      const [draggedCard] = newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, draggedCard);

      return newCards;
    });
  }, []);

  // const [drop, setDrop] = useState<ConnectDropTarget | null>(null);

  // console.log("drop", drop);

  // const [idx, setIdx] = useState(0);
  // const { drop } = useDnd({ setCards, index: idx });

  // const [, drop] = useDrop<TDragItem, void, { handlerId: Identifier | null }>({
  //   accept: "MENU",
  //   collect(monitor) {
  //     return {
  //       handlerId: monitor.getHandlerId(),
  //     };
  //   },
  //   hover(item, monitor) {
  //     // if (!ref) return;
  //     // if (typeof ref !== "function") return;
  //     console.log("드롭 탐색중", idx, item.index);

  //     const dragIndex = item.index;
  //     const hoverIndex = idx;

  //     if (dragIndex === hoverIndex) return;

  //     // const hoverBoundingReact = ref.current?.getBoundingClientRect();

  //     // const hoverMiddleY =
  //     //   (hoverBoundingReact.bottom - hoverBoundingReact.top) / 2;

  //     // const clientOffset = monitor.getClientOffset();

  //     // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingReact.top;

  //     // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

  //     // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

  //     console.log("!&^&@^!&^");
  //     moveCard(dragIndex, hoverIndex);

  //     item.index = hoverIndex;
  //   },
  // });

  // console.log(idx);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        {cards.map((card, i) => (
          <Card
            key={i}
            index={i}
            item={card}
            moveCard={moveCard}
            onDrop={(i) => console.log(typeof i)}
            setCards={setCards}
            // handleIdx={(i) => setIdx(i)}
          />
        ))}
      </div>
    </>
  );
};
export default Dnd;

const items = [
  {
    id: 1,
    text: "🥨",
  },
  {
    id: 2,
    text: "b",
  },
  {
    id: 3,
    text: "c",
  },
  {
    id: 4,
    text: "d",
  },
  {
    id: 5,
    text: "e",
  },
  {
    id: 6,
    text: "f",
  },
  {
    id: 7,
    text: "g",
  },
];
``;
