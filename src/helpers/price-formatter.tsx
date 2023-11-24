const PriceFormatter = (value: number) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(value);

  return <span>{formattedPrice}</span>;
};

export default PriceFormatter;
