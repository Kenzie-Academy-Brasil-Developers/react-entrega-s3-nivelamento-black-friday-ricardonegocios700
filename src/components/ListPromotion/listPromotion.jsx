export const ListPromotion = ({ promotion, percentil }) => {
  let vlrDesc = (promotion.price * percentil) / 100;
  let vlrPay = promotion.price - vlrDesc;
  console.log(vlrPay);

  return (
    <>
      <h2>Parabéns!</h2>
      <p>Você ganhou {percentil}% de desconto:</p>
      <p>Nome do Produto: {promotion.name}</p>
      <p>Preço original: {promotion.price.toFixed(2)}</p>
      <p>Valor do desconto: {vlrDesc.toFixed(2)}</p>
      <p>Preço a ser pago: {vlrPay.toFixed(2)}</p>
      <button>Adicionar ao carrinho</button>
    </>
  );
};
