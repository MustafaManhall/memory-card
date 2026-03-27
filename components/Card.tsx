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
    <div className="flex flex-wrap">
      {cardData.map((item: Pokemon) => {
        return (
          <div
            onClick={() => handleClick(item.id)}
            className="flex flex-col items-center border"
            key={item.id}
          >
            <h1>{item.name}</h1>
            <Image
              src={`${item.image}`}
              alt={"Pokemon Image"}
              width={250}
              height={250}
              loading="eager"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
