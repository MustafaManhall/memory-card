import { Pokemon } from "@/types/card";
import Image from "next/image";

const Card = ({
  cardData,
  handleClick,
}: {
  cardData: Pokemon[];
  handleClick: (id: number) => void;
}) => {
  return (
    <div className="grid grid-cols-6 w-full p-4 gap-3">
      {cardData.map((item: Pokemon) => {
        return (
          <div
            onClick={() => handleClick(item.id)}
            className="flex flex-col justify-center items-center border border-[#e2b714] rounded-2xl bg-[#1a1a2e] hover:bg-[#16213e] w-full h-full"
            key={item.id}
          >
            <Image
              src={`${item.image}`}
              alt={"Pokemon Image"}
              width={400}
              height={400}
              loading="eager"
            />
            <h1 className="text-2xl w-full text-center rounded-b-2xl bg-[#e2b714]" >{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
