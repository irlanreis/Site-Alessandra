import "../style/Session07.css";

const Session07Question = () => {
  const faq = [
    {
      question: "Como irei receber o ebook e o bônus?",
      answer:
        "HTML significa HyperText Markup Language e é a linguagem padrão usada para criar páginas web.",
    },
    {
      question:
        "Por quanto tempo terei acesso ao material comprado (E-book + AULA + PLANILHA)?",
      answer:
        "CSS significa Cascading Style Sheets e é usado para estilizar elementos em uma página web, como cores, fontes e layouts.",
    },
    {
      question:
        "Esse e-book vai funcionar para mim mesmo que eu não entenda de moda?",
      answer:
        "JavaScript é uma linguagem de programação que permite adicionar interatividade às páginas web, como animações e validações de formulário.",
    },
    {
      question: "Como posso ter certeza de que vou conseguir economizar com moda usando esse e-book?",
      answer: ""
    },
    {
      question: "Eu vou aprender a combinar melhor minhas roupas atuais?",
      answer: ""
    },
    {
      question: "Preciso de muito tempo no dia a dia para aplicar o que aprendo no e-book?",
      answer: ""
    },
    {
      question: "Esse e-book é útil para qualquer estilo pessoal?",
      answer: ""
    }
  ];

  return (
    <div className="container-main-07">
      <h1 className="title-07">
        Quais principais dúvidas que as clientes podem ter em relação ao e-book
        e quais as melhores respostas?
      </h1>
      <div className="faq-section">
        {faq.map((item, index) => (
          <details key={index}>
            <summary>{item.question}</summary>
            <div className="faq-content">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Session07Question;
