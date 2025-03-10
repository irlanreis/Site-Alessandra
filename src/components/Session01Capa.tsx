import "../style/Session01.css";
import bannerEbook from "../assets/images/capa-ebook.png";
import iconSecurit from "../assets/images/icon.png";

const Session01Capa = () => {
  return (
    <div className="main-content" id="home">
      <div className="container-all-items-01">
        <div className="container-banner">
      <img src={bannerEbook} alt="banner e-book" className="banner" />
      <div className="container-icon-text">
          <img
            src={iconSecurit}
            alt="icone de segurança"
            className="icon-securit"
          />
          <section className="container-securit">
            <h1 className="title-securit">Compra segura</h1>
            <p className="text-securit">
              Plataforma de alta segurança para você!
            </p>
          </section>
        </div>
        </div>
      <section className="product-content">
        <p className="text-info-01">
        Você pode falar qualquer coisa, menos que este e-book não vai mudar a forma como você encara suas compras de moda e a sua montagem de looks no dia a dia.
        </p>
        <a type="button" className="button" href="https://pay.hotmart.com/O98261969X" target="_blank">
          Quero meu e-book
        </a>
        <p className="text-info-02">
          Com o e-book{" "}
          <span className="destaque">
            INVESTINDO NA SUA IMAGEM COM CONSCIÊNCIA FINANCEIRA
          </span>{" "}
          você terá um guia prático para descobrir seu estilo pessoal, montar
          looks com facilidade e transformar suas compras em investimentos
          inteligentes.
        </p>
      </section>
      </div>
    </div>
  );
};

export default Session01Capa;
