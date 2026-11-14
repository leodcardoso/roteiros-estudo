interface QuestaoCardProps {
  pergunta: string;
  resposta: string;
  numero: number;
}

export default function QuestaoCard({
  pergunta,
  resposta,
  numero,
}: QuestaoCardProps) {
  return (
    <article className="questao-card">
      <h3>Questão {numero}</h3>

      <p>{pergunta}</p>

      <details>
        <summary>Ver resposta</summary>
        <p>{resposta}</p>
      </details>
    </article>
  );
}