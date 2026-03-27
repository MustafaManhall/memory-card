const Score = ({
  bestScore,
  currentScore,
}: {
  bestScore: number;
  currentScore: number;
}) => {
  return (
    <>
      <h1 className="text-4xl text-[#e2b714] max-sm:text-3xl">Best Score : {bestScore}</h1>
      <h1 className="text-4xl text-[#e2b714] max-sm:text-3xl" >Current Score : {currentScore}</h1>
    </>
  );
};

export default Score;
