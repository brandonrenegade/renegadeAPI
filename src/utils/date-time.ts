export const getRandomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getCurrentMinsTimestamp = (): number => {
  const now = new Date();
  now.setSeconds(0, 0);
  return now.getTime();
};
