
import Link from "next/link";
import type { Roteiro } from "@/lib/roteiros";

interface RoteiroCardProps {
  roteiro: Roteiro;
  disciplinaNome: string;
}

export default function RoteiroCard({
  roteiro,
  disciplinaNome,
}: RoteiroCardProps) {
  return (
    <article className="roteiro-card">
      <div className="roteiro-card-info">
        <span>{disciplinaNome}</span>
        <span>{roteiro.ano}º ano</span>
      </div>

      <h3>{roteiro.titulo}</h3>

      <p>{roteiro.tema}</p>

      <p>{roteiro.tempoEstimadoMinutos} minutos de estudo</p>

      <Link href={`/roteiros/${roteiro.id}`}>
        Ver roteiro
      </Link>
    </article>
  );
}
