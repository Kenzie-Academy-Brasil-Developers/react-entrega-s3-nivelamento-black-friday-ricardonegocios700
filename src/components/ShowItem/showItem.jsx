export const ShowItem = ({
  item: { name, price, percentil, vlrDesc, vlrPay },
}) => {
  return (
    <div>
      <div>Nome do Produto {name}</div>
      <div>Preço original {Number(price).toFixed(2)}</div>
      {percentil && <div>Porcentagem do desconto {percentil}%</div>}
      {vlrDesc && <div>Valor do desconto {Number(vlrDesc).toFixed(2)}</div>}
      {vlrPay && <div>Preço a ser pago {Number(vlrPay).toFixed(2)}</div>}
    </div>
  );
};
