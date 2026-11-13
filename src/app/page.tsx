
import { getRoteiros, getDisciplinas } from "@/lib/roteiros";
import RoteirosList from "@/components/RoteirosList";

export default function Home() {
  const roteiros = getRoteiros();
  const disciplinas = getDisciplinas();

  return (
    <>
      <header className="cabecalho">
        <div className="cabecalho-conteudo">
          <LinkLogo />
          <nav>
            <a href="/">Início</a>
            <a href="/professores">Área do professor</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="apresentacao">
          <span className="apresentacao-etiqueta">
            Plataforma de aprendizagem
          </span>
          <h1>Seus estudos começam aqui!</h1>
          <p>
            Encontre roteiros de estudo organizados por disciplina e ano
            escolar para aprender no seu ritmo.
          </p>
        </section>

        <RoteirosList
          roteiros={roteiros}
          disciplinas={disciplinas}
        />
      </main>
    </>
  );
}

function LinkLogo() {
  return (
    <a href="/" className="logo">
      Roteiros<span> de Estudo</span>
    </a>
  );
}
