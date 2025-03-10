import "../style/Session-price-product.css";

function Session03PriceProduct() {
  return (
    <div className="container-price-product">
      <div className="card-price-product">
        <h1 className="title-price-product">Investimento</h1>
        <div className="text-content">
          <p className="bonus-price-product">
            Bônus da planilha <span className="price-old">R$ 59,00</span> por{" "}
            <span className="price-new">R$ 0,00</span>
          </p>

          <p className="bonus-price-product">
            Bônus da aula <span className="price-old">R$ 350,00</span> por{" "}
            <span className="price-new">R$ 0,00</span>
          </p>

          <p className="ebook-price-product">
            O e-book de <span className="price">R$ 97,00</span> vira{" "}
            <span className="highlight">cashback</span> em serviços com a
            Alessandra
          </p>
        </div>

        <div className="price-finally">
          <p className="total">
            <span className="total-label">Total </span> de{" "}
            <span className="price-old">R$ 603,00</span> por apenas
          </p>

          <p className="installments"></p>

          <p className="payment">
            <span className="installment">10 x de R$ 11,66</span>
          </p>

          <p className="cash-payment">
            <span className="price-cash">ou R$ 97,00</span> à vista
          </p>
        </div>
        <a type="button" className="button" href="https://pay.hotmart.com/O98261969X" target="_blank">
          Quero meu e-book
        </a>
      </div>

     <a href="https://pay.hotmart.com/O98261969X" target="_blank" rel="noopener noreferrer" className="button">Garantir ebook</a>
    </div>
  );
}

export default Session03PriceProduct;
