
"use client";

import { useState, type FormEvent } from "react";
import { getDisciplinas } from "@/lib/roteiros";

export default function FormularioProfessor() {
  const disciplinas = getDisciplinas();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [disciplinaId, setDisciplinaId] = useState("");
  const [ano, setAno] = useState("");
  const [tema, setTema] = useState("");
  const [quantidadeQuestoes, setQuantidadeQuestoes] = useState("5");
  const [dataUtilizacao, setDataUtilizacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Calcula a data mínima: hoje + 7 dias
  function obterDataMinima() {
    const data = new Date();
    data.setDate(data.getDate() + 7);

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagem("");

    if (!email.endsWith("@escola.educa.gov.br")) {
      setMensagem("Utilize seu e-mail institucional (@escola.educa.gov.br).");
      return;
    }

    if (dataUtilizacao < obterDataMinima()) {
      setMensagem("A data de utilização deve ser de pelo menos 7 dias à frente.");
      return;
    }

    if (Number(quantidadeQuestoes) < 3 || Number(quantidadeQuestoes) > 10) {
      setMensagem("A quantidade de questões deve estar entre 3 e 10.");
      return;
    }

    setMensagem("Solicitação registrada com sucesso! (Simulação do protótipo)");
  }

  return (
    <section className="formulario-section">
      <h2>Dados da solicitação</h2>

      <form onSubmit={handleSubmit} className="formulario-professor">
        <div className="campo-formulario">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="email">E-mail institucional</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@escola.educa.gov.br"
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="disciplina">Disciplina</label>
          <select
            id="disciplina"
            value={disciplinaId}
            onChange={(e) => setDisciplinaId(e.target.value)}
            required
          >
            <option value="">Selecione uma disciplina</option>
            {disciplinas.map((disciplina) => (
              <option key={disciplina.id} value={disciplina.id}>
                {disciplina.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label htmlFor="ano">Ano escolar</label>
          <select
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          >
            <option value="">Selecione o ano</option>
            {[6, 7, 8, 9].map((numero) => (
              <option key={numero} value={numero}>
                {numero}º ano
              </option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label htmlFor="tema">Tema do roteiro</label>
          <textarea
            id="tema"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            placeholder="Descreva o tema que deseja abordar"
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="quantidade">
            Quantidade de questões (3 a 10)
          </label>
          <input
            id="quantidade"
            type="number"
            min="3"
            max="10"
            value={quantidadeQuestoes}
            onChange={(e) => setQuantidadeQuestoes(e.target.value)}
            required
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="data">Data prevista de utilização</label>
          <input
            id="data"
            type="date"
            min={obterDataMinima()}
            value={dataUtilizacao}
            onChange={(e) => setDataUtilizacao(e.target.value)}
            required
          />
          <small>Escolha uma data com pelo menos 7 dias de antecedência.</small>
        </div>

        <button type="submit" className="botao-enviar">
          Enviar solicitação
        </button>

        {mensagem && (
          <p className="mensagem-formulario" role="status">
            {mensagem}
          </p>
        )}
      </form>
    </section>
  );
}
