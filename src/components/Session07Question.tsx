import "../style/Session07.css";
import { useState } from "react";

const Session07Question = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "Como irei receber o ebook e o bônus?",
      answer:
        "O e-book e os bônus estão disponíveis na plataforma da Hotmart e o acesso será enviado imediatamente após a sua compra para o e-mail cadastrado. Você pode acessar todo o conteúdo pelo seu computador, smartphone ou tablet. O cashback é garantido assim que a compra for realizada.",
    },
    {
      question:
        "Por quanto tempo terei acesso ao material comprado (E-book + AULA + PLANILHA)?",
      answer:
        "O acesso é vitalício! Isso mesmo. Você terá acesso a todo o conteúdo e suas respectivas atualizações para sempre!",
    },
    {
      question:
        "Esse e-book vai funcionar para mim mesmo que eu não entenda de moda?",
      answer:
        "Sim! O e-book foi criado para ser prático e acessível, com linguagem simples e exemplos reais, mesmo para quem não tem familiaridade com o mundo da moda. Ele te ajuda a identificar seu estilo e fazer escolhas de forma fácil.",
    },
    {
      question:
        "Como posso ter certeza de que vou conseguir economizar com moda usando esse e-book?",
      answer:
        "O e-book traz estratégias comprovadas para compras financeiramente conscientes. As dicas práticas ajudam a evitar compras por impulso e a fazer escolhas que realmente combinam com você.",
    },
    {
      question: "Eu vou aprender a combinar melhor minhas roupas atuais?",
      answer:
        "O e-book é o primeiro passo para você trazer para sua consciência uma montagem de looks com foco nas roupas que você já tem. A ideia principal do método 'Linha de Montagem de Looks é te ajudar a seguir uma ordem pré-determinada na hora de pensar no que você vai usar no dia a dia.",
    },
    {
      question:
        "Preciso de muito tempo no dia a dia para aplicar o que aprendo no e-book?",
      answer:
        "Não! O guia foi pensado para se adaptar à rotina corrida de forma que quanto mais você pratica, mais fácil fica. Com o workbook e as dicas rápidas, você vai ganhar tempo ao se vestir e fazer suas escolhas de forma prática e eficiente.",
    },
    {
      question: "Esse e-book é útil para qualquer estilo pessoal?",
      answer:
        "Sim! O conteúdo é flexível e ajuda a identificar e aperfeiçoar seu estilo, seja ele clássico, casual, moderno, ou qualquer outro. O foco é usar a moda como aliada de maneira autêntica, sem padrões fixos.",
    },
    {
      question:
        "Qual a diferença entre adquirir esse produto (e-book INVESTINDO NA SUA IMAGEM COM CONSCIÊNCIA FINANCEIRA + a aula ESTILO RENTÁVEL + planilha COMPRAS DE MODA E CONTROLE DE CASHBACK) e a Consultoria de Imagem & Estilo da Alessandra?”",
      answer:
        "A principal diferença é que neste material a Alessandra te ensina por um valor muito acessível: (1) um método prático de montagem de looks para ser realizado pela própria pessoa em casa no dia a dia; e (2) as técnicas de compras financeiramente conscientes que ela apenas apresenta em palestras exclusivas. Já no caso da consultoria individual a Alessandra elabora um plano de ação personalizado com mais etapas e ela que monta seus looks. Por isso, o valor da consultoria ser maior, pelas horas de dedicação exclusiva.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-main-07">
      <h1 className="title-07">
        Quais principais dúvidas que as clientes podem ter em relação ao e-book
        e quais as melhores respostas?
      </h1>
      <div className="faq-section">
        {faq.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <a href="https://pay.hotmart.com/O98261969X" target="_blank" rel="noopener noreferrer" className="btn-07">Quero meu e-book</a>
    </div>
  );
};

export default Session07Question;
