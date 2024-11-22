import perfil from "../assets/images/alessandra-perfil.png";
import "../style/Session08.css";

const Session08Sobre = () => {
  return (
    <div className="container-08">
      <h1 className="title-08">QUEM É ALESSANDRA AZEVEDO?</h1>

      <div className="container-text">
        <p className="text-08">
          Economista formada pela PUC-RJ, com pós-graduação em Finanças pelo
          Ibmec-RJ e Consultora de Imagem & Estilo.
        </p>
        <p className="text-08">
          Ocupou cargos em empresas ao longo de 22 anos, especialmente na gestão
          de investimentos e planejamento estratégico, com passagem pela área de
          comunicação e atendimento a clientes.
        </p>
        <p className="text-08">
          Atualmente, se dedica a orientar homens e mulheres sobre a importância
          da imagem como uma ferramenta poderosa para elevar o bem-estar e a
          autoconfiança profissional.
        </p>

        <p className="text-08">
          Porém, sempre utilizando seu olhar financeiro para abordar o consumo
          de moda sem excesso de gastos e aplicado a realidade de cada cliente,
          otimizando seus armários e ensinando como fazer um planejamento de
          compras inteligentes. 
        </p>

        <p className="text-08">
        Gerando mais valor não só para a imagem, mas
        também para o bolso de seus clientes.
        </p>
      </div>
      <img className="perfil-08" src={perfil} alt="foto Alessandra" />
    </div>
  );
};

export default Session08Sobre;
