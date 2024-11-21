import "../style/Session06.css";

const Session06Product = () => {
  const infos = [
    {
      id: 4,
      text: "Mulheres que desejam desenvolver hábitos de compras mais conscientes, evitando gastos desnecessários e compras por impulso.",
    },
    {
      id: 5,
      text: "Quem busca melhorar a autoconfiança por meio de uma imagem que reflita sua personalidade e objetivos.",
    },
  ];

  return (
    <div className="container-main-06">
      <div className="main-card-all">
        {infos.map((info) => (
          <div className="card-main-06" key={info.id}>
            <div className="card-06">
              <span className="circle-06">{info.id}</span>
              <p className="card-text">{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session06Product;
