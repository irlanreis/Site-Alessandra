import "../style/Session03.css";
import Session03PriceProduct from "./Session03PriceProduct";

const Session03product = () => {
  const clientFindInProduct = [
    {
      text: "Porque sua imagem é um (super) poder.",
    },
    {
      text: "Descubra o estilo que mais te representa.",
    },
    {
      text: "Quais as peças chave que fazem o seu armário render mais.",
    },
    {
      text: "Quais os tipos de sapatos mais versáteis e estilosos para você apostar.",
    },

    {
      text: "Acessórios: como usar colares nos diferentes tipos de decotes.",
    },
    {
      text: "Quais são as 10 atitudes para fazer compras de moda sem stress financeiro.",
    },
  ];

  return (
    <div className="main-session03">
        <h1 className="title-session03">
          CONTEÚDOS QUE VOCÊ ENCONTRA DENTRO DO EBOOK <span className="destaque-03">
          INVESTINDO NA SUA IMAGEM COM
          CONSCIÊNCIA FINANCEIRA</span>
        </h1>
        <ul className="ul-session03-container">
          {clientFindInProduct.map((item, index) => (
            <li key={index} className="li-session03">
              {item.text}
            </li>
          ))}
        </ul>
        <Session03PriceProduct/>
    </div>
  );
};

export default Session03product;
