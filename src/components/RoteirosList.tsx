
"use client";

import { useState } from "react";
import RoteiroCard from "./RoteiroCard";
import type { Roteiro, Disciplina } from "@/lib/roteiros";

interface RoteirosListProps {
  roteiros: Roteiro[];
  disciplinas: Disciplina[];
}

export default function RoteirosList({
  roteiros,
  disciplinas,
}: RoteirosListProps) {
  const [disciplinaSelecionada, setDisciplinaSelecionada] =
    useState("todas");

  const [anoSelecionado, setAnoSelecionado] =
    useState("todos");

  const roteirosFiltrados = roteiros.filter((roteiro) => {
    const correspondeDisciplina =
      disciplinaSelecionada === "todas" ||
      roteiro.disciplinaId === disciplinaSelecionada;

    const correspondeAno =
      anoSelecionado === "todos" ||
      roteiro.ano === Number(anoSelecionado);

    return correspondeDisciplina && correspondeAno;
  });

  return (
    <section className="roteiros-section">
      <h2>Encontre seu roteiro de estudo</h2>

      <div className="filtros">
        <label htmlFor="disciplina">Disciplina:</label>

        <select
          id="disciplina"
          value={disciplinaSelecionada}
          onChange={(e) => setDisciplinaSelecionada(e.target.value)}
        >
          <option value="todas">Todas as disciplinas</option>

          {disciplinas.map((disciplina) => (
            <option key={disciplina.id} value={disciplina.id}>
              {disciplina.nome}
            </option>
          ))}
        </select>

        <label htmlFor="ano">Ano escolar:</label>

        <select
          id="ano"
          value={anoSelecionado}
          onChange={(e) => setAnoSelecionado(e.target.value)}
        >
          <option value="todos">Todos os anos</option>
          <option value="6">6º ano</option>
          <option value="7">7º ano</option>
          <option value="8">8º ano</option>
          <option value="9">9º ano</option>
        </select>
      </div>

      <p className="roteiros-contagem">{roteirosFiltrados.length} roteiros encontrados</p>

      <div className="roteiros-grid">
        {roteirosFiltrados.length > 0 ? (
          roteirosFiltrados.map((roteiro) => {
            const disciplina = disciplinas.find(
              (item) => item.id === roteiro.disciplinaId
            );

            return (
              <RoteiroCard
                key={roteiro.id}
                roteiro={roteiro}
                disciplinaNome={disciplina?.nome ?? "Disciplina"}
              />
            );
          })
        ) : (
          <p className="roteiros-contagem">Nenhum roteiro encontrado para esses filtros.</p>
        )}
      </div>
    </section>
  );
}
