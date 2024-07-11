export const formattedPriceValue = (priceValue) => {
  return priceValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
