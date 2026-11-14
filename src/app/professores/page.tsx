
import FormularioProfessor from "@/components/FormularioProfessor";
import Cabecalho from "@/components/Cabecalho";

export default function ProfessoresPage() {
  return (
    
    <main>
      <Cabecalho paginaAtiva="professores" />
      <section className="apresentacao">
        <span className="apresentacao-etiqueta">
          Área do professor
        </span>

        <h1>Solicite um roteiro de estudo</h1>

        <p>
          Preencha as informações abaixo para solicitar
          um novo material de estudo para seus alunos.
        </p>
      </section>

      <FormularioProfessor />
    </main>
  );
}
