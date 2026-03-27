import { Pokemon } from "@/types/card";
import Image from "next/image";

const Card = ({
  cardData,
  handleClick,
  isLoading,
}: {
  cardData: Pokemon[];
  handleClick: (id: number) => void;
  isLoading: boolean;
}) => {
  return (
    <div className={isLoading ? "flex justify-center items-center w-full h-full" :"grid grid-cols-6 w-full p-4 gap-3 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2"}>
      {isLoading ? <div className="animate-spin border-12 border-[#e2b714] border-t-white w-60 h-60 rounded-full"></div> : cardData.map((item: Pokemon) => {
        return (
          <div
            onClick={() => handleClick(item.id)}
            className="flex flex-col justify-center items-center border border-[#e2b714] rounded-2xl bg-[#1a1a2e] hover:bg-[#16213e] w-full h-full cursor-pointer"
            key={item.id}
          >
            <Image
              src={`${item.image}`}
              alt={"Pokemon Image"}
              width={400}
              height={400}
              loading="eager"
            />
            <h1 className="text-2xl max-md:text-xl max-sm:text-lg w-full text-center rounded-b-2xl bg-[#e2b714]" >{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
