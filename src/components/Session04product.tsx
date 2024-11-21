import "../style/Session04.css";

const Session04product = () => {
  const clientFindInProduct = [
    {
      text: "A sua imagem como diferencial profissional.",
    },
    {
      text: "O efeito inconsciente da sua imagem - o olhar interno.",
    },
    {
      text: "Saindo da “Síndrome do não tenho roupa”.",
    },
    {
      text: "A verdade: o preço que você paga não é o mais importante.",
    },
    {
      text: "Comprando moda com consciência financeira.",
    },

    {
      text: "Como fazer seu armário render?",
    },
    {
      text: "Resistindo a compras por impulso e assumindo o controle.",
    },
  ];

  return (
    <div className="main-session04">
      <div className="itens-product">
        <h1 className="title-session04">
          O QUE VOCÊ ENCONTRA NA AULA BÔNUS <span className="destaque04">“ESTILO RENTÁVEL”</span>?
        </h1>
        <ul className="ul-session04-container">
          {clientFindInProduct.map((item, index) => (
            <li key={index} className="li-session04">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Session04product;
