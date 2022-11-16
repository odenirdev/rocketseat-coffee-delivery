export const parsePrice = (value: number) => {
  return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
};
