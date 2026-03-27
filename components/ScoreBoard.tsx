const Score = ({
  bestScore,
  currentScore,
}: {
  bestScore: number;
  currentScore: number;
}) => {
  return (
    <>
      <h1>Current Score : {currentScore}</h1>
      <h1>Best Score : {bestScore}</h1>
    </>
  );
};

export default Score;
