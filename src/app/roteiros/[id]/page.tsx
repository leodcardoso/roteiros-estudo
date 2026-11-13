
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRoteiros,
  getRoteiroCompleto,
} from "@/lib/roteiros";

import ResumoWikipedia from "@/components/ResumoWikipedia";

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
        <header className="cabecalho">
  <div className="cabecalho-conteudo">
    <a href="/" className="logo">
      Roteiros<span> de Estudo</span>
    </a>
    <nav>
      <a href="/">Início</a>
      <a href="/professores">Área do professor</a>
    </nav>
  </div>
</header>




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
          <article key={index}>
            <h3>
              Questão {index + 1}
            </h3>

            <p>{questao.pergunta}</p>

            <details>
              <summary>Ver resposta</summary>
              <p>{questao.resposta}</p>
            </details>
          </article>
        ))}
      </section>

      <section>
        <h2>Sobre este material</h2>

        <p>Material gerado por inteligência artificial.</p>

        <p>
          Revisado por: {roteiro.professor.nome}
        </p>

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
