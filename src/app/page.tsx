
import { getRoteiros, getDisciplinas } from "@/lib/roteiros";
import RoteirosList from "@/components/RoteirosList";
import Cabecalho from "@/components/Cabecalho";


export default function Home() {
  const roteiros = getRoteiros();
  const disciplinas = getDisciplinas();

  return (
    <>
      <Cabecalho paginaAtiva="inicio" />

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
