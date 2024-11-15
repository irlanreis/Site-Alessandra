import "../style/Session02.css";
import { CircleChevronRight } from 'lucide-react';

const Session02Product = () => {

  return (
    <div className="main-product">
      <div className="content-text">
        <h1 className="title-main">
          Conquiste uma imagem poderosa e autêntica sem comprometer seu
          orçamento!
        </h1>
        <div className="main-bonus">
          <p>
          <span className="destaque-bonus">Bônus 1 </span>{<CircleChevronRight className="arrow"/>} "Aula estilo Rentável".
          </p>
          <p>
          <span className="destaque-bonus">Bônus 2 </span>
          {<CircleChevronRight className="arrow"/>} Planilha para controle de compras de moda e cashback em lojas.
          </p>
          <p>
          <span className="destaque-bonus">Bônus 3 </span>
          {<CircleChevronRight className="arrow"/>} O valor integral do e-book em ca$hback para ser usado em qualquer serviço consultoria que você contratar com a Alessandra.
          </p>
        </div>
        <button type="button" className="button">
          <a>Preciso deste e-book</a>
        </button>
      </div>
    </div>
  );
};
export default Session02Product;
