"use client";

import { useEffect, useState } from "react";

interface ResumoWikipediaProps {
  tema: string;
}

interface Resumo {
  extract: string;
  content_urls?: {
    desktop?: {
      page?: string;
    };
  };
}

export default function ResumoWikipedia({
  tema,
}: ResumoWikipediaProps) {
  const [resumo, setResumo] = useState<Resumo | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function buscarResumo() {
      setCarregando(true);
      setErro(false);
      setResumo(null);

      try {
const busca = await fetch(
  `https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(tema)}&format=json&origin=*&srlimit=1`,
  { signal: controller.signal }
);

if (!busca.ok) {
  throw new Error("Falha na pesquisa.");
}

const resultadoBusca = await busca.json();
const titulo = resultadoBusca.query?.search?.[0]?.title;

if (!titulo) {
  throw new Error("Nenhum artigo relacionado encontrado.");
}

const resposta = await fetch(
  `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`,
  { signal: controller.signal }
);
        if (!resposta.ok) {
          throw new Error("Resumo não encontrado.");
        }

        const dados: Resumo = await resposta.json();

        if (!dados.extract) {
          throw new Error("Resumo indisponível.");
        }

        setResumo(dados);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setErro(true);
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    buscarResumo();

    return () => controller.abort();
  }, [tema]);

  return (
    <section className="wikipedia-section">
      <h2>Conteúdo complementar</h2>
      <p>Informações adicionais consultadas na Wikipédia.</p>

      {carregando && <p>Buscando informações...</p>}

      {erro && (
        <p>
          Não foi possível carregar o conteúdo complementar.
          Você ainda pode utilizar normalmente este roteiro.
        </p>
      )}

      {resumo && (
        <div>
          <p>{resumo.extract}</p>

          {resumo.content_urls?.desktop?.page && (
            <a
              href={resumo.content_urls.desktop.page}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar na Wikipédia
            </a>
          )}
        </div>
      )}
    </section>
  );
}