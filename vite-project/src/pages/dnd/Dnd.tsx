import { useCallback, useState } from "react";
import Card from "./Card";

type TItem = {
  id: number;
  text: string;
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

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        {cards.map((card, i) => (
          <Card key={i} index={i} item={card} moveCard={moveCard} />
        ))}
      </div>
    </>
  );
};
export default Dnd;

const items = [
  {
    id: 1,
    text: "a",
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
