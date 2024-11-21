import "../style/Session05.css";

const Session05Product = () => {

  const infos = [
    {
      id: 1,
      text: "O e-book é ideal para mulheres que desejam aprimorar sua imagem pessoal e profissional de forma estratégica, sem comprometer suas finanças."
    },
    {
      id: 2,
      text: "Profissionais que buscam usar sua imagem como uma ferramenta de impacto na carreira."
    },
    {
      id: 3,
      text: "Mulheres que querem descobrir seu estilo pessoal e aprender a montar looks funcionais no dia a dia."
    },
  ]

  const highlightWords = (text: string, words: string[]) => {
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };


  return (
    <div className="container-main">
      <h1 className="title-05">PRA QUEM O E-BOOK É MAIS INDICADO?</h1>

      {infos.map((info) => (
        <div className="card-main" key={info.id}>
          <div className="card">
            <span className="circle">{info.id}</span>
            <p key={info.id} dangerouslySetInnerHTML={{ __html: highlightWords(info.text, ["aprimorar", "ferramenta", "funcionais"]) }} className="card-text"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Session05Product;
