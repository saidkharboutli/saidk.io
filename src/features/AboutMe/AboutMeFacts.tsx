interface IAboutMeFactsProps {
  facts: { question: string; answer: string }[];
}

const AboutMeFacts = (props: IAboutMeFactsProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 align-middle md:flex-row md:flex-wrap">
      {props.facts.map((fact, index) => (
        <div
          key={index}
          className="flex grow flex-col gap-2 transition-all duration-300 hover:scale-110 md:w-1/4"
        >
          <h3 className="mb-2 text-lg font-bold">{fact.question}</h3>
          <p>{fact.answer}</p>
        </div>
      ))}
    </div>
  );
};

export { AboutMeFacts };
