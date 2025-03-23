import chip from "../assets/images/chip.png";
import signal from "../assets/images/signal.png";
import mastercard from "../assets/images/mastercard.png";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "SquishyTraveller",
      number: "5000 0000 0000 0000",
      expiry: "12/05",
      image: mastercard,
      color: "#050622",
    },
    {
      id: 2,
      name: "Personal",
      number: "5000 0000 0000 0000",
      expiry: "12/05",
      image: mastercard,
      color: "#141c5b",
    },
  ]);

  return (
    <div className="w-full flex xl:flex-row flex-col items-center gap-4 mt-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="xl:w-[380px] w-full h-[200px] rounded-2xl flex flex-col gap-3 py-5 px-8"
          style={{ backgroundColor: card.color }}>
          <div className="flex items-center gap-1">
            <img src={chip} alt="chip" className="w-11 h-9" />
            <img src={signal} alt="signal" className="w-8 h-8" />
          </div>
          <div className="w-full flex items-center justify-between">
            {card.number.split(" ").map((chunk, index) => (
              <span key={index} className="text-white text-lg">
                {chunk}
              </span>
            ))}
          </div>
          <span className="text-white text-sm">{card.expiry}</span>
          <div className="w-full flex items-center justify-between">
            <span className="text-white">{card.name}</span>
            <img src={card.image} alt="card brand" className="w-[25%] mt-[-5px]" />
          </div>
        </div>
      ))}
      <div className="xl:w-[380px] w-full h-[200px] border-2 border-card-border border-dashed rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
        <PlusCircleIcon className="w-10 h-10 text-card-border" />
        <span className="text-lg font-medium text-card-border">Add new card</span>
      </div>
    </div>
  );
};

export default Cards;
