import { useState } from "react";
import Card from "./Card";
import github from "../images/github-142-svgrepo-com.svg";
import nextjs from "../images/nextjs-fill-svgrepo-com.svg";
import react from "../images/react-logo-programming-2-svgrepo-com.svg";

const initCards = [
   {
      id: 0,
      svg: github,
   },
   {
      id: 1,
      svg: react,
   },
   {
      id: 2,
      svg: nextjs,
   },
];

export default function Cards() {
   const [cards, setCards] = useState(initCards);

   const handleClick = (id: number) => {
      const ind = cards.findIndex((card) => card.id === id);
      const cardsCopy = [...cards];
      cardsCopy.splice(ind, 1);
      setCards([...cardsCopy, cards[ind]]);
   };
   return (
      <div className="cards">
         {cards.map((card, ind) => (
            <Card
               {...card}
               ind={ind}
               key={card.id}
               onClick={() => handleClick(card.id)}
            />
         ))}
      </div>
   );
}
