
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRoteiros,
  getRoteiroCompleto,
} from "@/lib/roteiros";

import ResumoWikipedia from "@/components/ResumoWikipedia";
import Cabecalho from "@/components/Cabecalho";
import QuestaoCard from "@/components/QuestaoCard";


// Gera uma página estática para cada roteiro
export function generateStaticParams() {
  return getRoteiros().map((roteiro) => ({
    id: roteiro.id,
  }));
}

// Impede IDs que não foram gerados
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RoteiroPage({ params }: PageProps) {
  const { id } = await params;

  const roteiro = getRoteiroCompleto(id);

  // Verifica se o roteiro e suas relações existem
  if (!roteiro || !roteiro.disciplina || !roteiro.professor) {
    notFound();
  }

  return (
    
    <main>
        <Cabecalho paginaAtiva="inicio" />




      <Link href="/">
        ← Voltar para os roteiros
      </Link>

      <section>
        <p>
          {roteiro.disciplina.nome} | {roteiro.ano}º ano
        </p>

        <h1>{roteiro.titulo}</h1>

        <h2>{roteiro.tema}</h2>

        <p>{roteiro.explicacao}</p>

        <p>
          Tempo estimado: {roteiro.tempoEstimadoMinutos} minutos
        </p>
      </section>

      <section>
        <h2>Questões de fixação</h2>

        {roteiro.questoes.map((questao, index) => (
  <QuestaoCard
    key={index}
    pergunta={questao.pergunta}
    resposta={questao.resposta}
    numero={index + 1}
  />
))}
      </section>

      
<section>
  <h2>Sobre este material</h2>

  {roteiro.geradoPorIA && (
    <p>Material gerado por inteligência artificial.</p>
  )}

  {roteiro.revisado && (
    <p>
      Revisado por: {roteiro.professor.nome}
    </p>
  )}

  <p>
    Disciplina: {roteiro.professor.disciplina}
  </p>

  <p>
    Escola: {roteiro.professor.escola}
  </p>
</section>


      <ResumoWikipedia tema={roteiro.tema} />
    </main>
  );
}
