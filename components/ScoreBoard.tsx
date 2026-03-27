const Score = ({
  bestScore,
  currentScore,
}: {
  bestScore: number;
  currentScore: number;
}) => {
  return (
    <>
      <h1 className="text-4xl text-[#e2b714]">Best Score : {bestScore}</h1>
      <h1 className="text-4xl text-[#e2b714]" >Current Score : {currentScore}</h1>
    </>
  );
};

export default Score;
