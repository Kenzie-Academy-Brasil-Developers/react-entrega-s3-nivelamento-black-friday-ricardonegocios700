export const ShowItem = ({
  promotion: { name, price, percentil, vlrDesc, vlrPay },
}) => {
  return (
    <>
      <p>Nome do Produto {name}</p>
      <p>Preço original {Number(price).toFixed(2)}</p>
      <p>Porcentagem do desconto {percentil}%</p>
      <p>Valor do desconto {Number(vlrDesc).toFixed(2)}</p>
      <p>Preço a ser pago {Number(vlrPay).toFixed(2)}</p>
    </>
  );
};
