
import FormularioProfessor from "@/components/FormularioProfessor";

export default function ProfessoresPage() {
  return (
    <main>
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
