
import roteiros from "@/data/roteiros.json";
import disciplinas from "@/data/disciplinas.json";
import professores from "@/data/professores.json";

export type Roteiro = (typeof roteiros)[number];

export type Disciplina = (typeof disciplinas)[number];

export function getDisciplinas() {
  return disciplinas;
}



// Retorna todos os roteiros
export function getRoteiros() {
  return roteiros;
}

// Busca um roteiro pelo seu ID
export function getRoteiroPorId(id: string) {
  return roteiros.find((roteiro) => roteiro.id === id);
}

// Busca uma disciplina pelo ID
export function getDisciplinaPorId(id: string) {
  return disciplinas.find((disciplina) => disciplina.id === id);
}

// Busca um professor pelo ID
export function getProfessorPorId(id: string) {
  return professores.find((professor) => professor.id === id);
}




export function getRoteiroCompleto(id: string) {
  const roteiro = getRoteiroPorId(id);

  if (!roteiro) {
    return null;
  }

  const disciplina = getDisciplinaPorId(roteiro.disciplinaId);
  const professor = getProfessorPorId(roteiro.professorId);

  return {
    ...roteiro,
    disciplina,
    professor,
  };
}
