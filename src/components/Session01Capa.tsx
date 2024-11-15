import "../style/Session01.css";
import bannerEbook from "../assets/images/capa-ebook.png";
import iconSecurit from "../assets/images/icon.png";

const Session01Capa = () => {
  return (
    <div className="main-content">
      <img src={bannerEbook} alt="banner e-book" className="banner" />
      <section className="product-content">
        <p className="text-info-01">
        VOCÊ PODE FALAR QUALQUER COISA, MENOS QUE ESTE E-BOOK NÃO VAI MUDAR A FORMA COMO VOCÊ ENCARA SUAS COMPRAS DE MODA E A SUA MONTAGEM DE LOOKS NO DIA A DIA.
        </p>
        <button type="button" className="button">
          Quero meu e-book
        </button>
        <p className="text-info-02">
        Com o e-book <span className="destaque">INVESTINDO NA SUA IMAGEM
        COM CONSCIÊNCIA FINANCEIRA</span> você terá um guia prático para descobrir seu estilo pessoal, montar looks com facilidade e transformar suas compras em investimentos inteligentes.
        </p>
      </section>
      <div className="main-securit">
      <div className="container-icon-text">
      <img src={iconSecurit} alt="icone de segurança" className="icon-securit"/>  
      <section className="container-securit">
        <h1 className="title-securit">Compra segura</h1>
        <p className="text-securit">
          Plataforma de alta segurança para você!
        </p>
      </section>
      </div>
      </div>
    </div>
  );
};

export default Session01Capa;
