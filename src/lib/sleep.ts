export const sleep = (value: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, value));
};
