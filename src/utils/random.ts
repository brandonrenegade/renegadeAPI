export const getRandomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
