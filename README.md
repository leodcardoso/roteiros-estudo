# 📚 Roteiros de Estudo — A2

Aplicação web desenvolvida como parte da Atividade Avaliativa A2, utilizando **React e Next.js**, com o objetivo de facilitar o acesso dos alunos aos roteiros de estudo disponibilizados pela rede municipal de educação.

## 📌 Sobre o projeto

O sistema permitirá que alunos do 6º ao 9º ano encontrem roteiros de estudo de acordo com a disciplina e o ano escolar.

Cada roteiro apresentará título, tema, explicação simplificada, questões de fixação, respostas e tempo estimado de estudo. Também serão exibidas informações sobre a utilização de inteligência artificial e a identificação do professor responsável pela revisão.

Além disso, professores poderão preencher um formulário para solicitar novos roteiros de estudo.

## 🛠️ Tecnologias

- [ ]  React
- [ ]  Next.js (App Router)
- [ ]  JavaScript ou TypeScript
- [ ]  CSS / Tailwind CSS
- [ ]  Arquivos JSON para armazenamento dos dados
- [ ]  API pública, gratuita e sem necessidade de chave de acesso

## ✅ Checklist de requisitos

### 1. Estrutura e configuração

- [X]  Projeto desenvolvido utilizando Next.js.
- [X]  Utilização do App Router.
- [X]  Aplicação sem back-end próprio.
- [X]  Aplicação sem banco de dados.
- [X]  Dados do domínio armazenados em arquivos JSON.
- [X]  Configuração para exportação estática (`output: 'export'`).
- [X]  Repositório Git público.

### 2. Modelagem dos dados

- [ ]  Criar entidade Roteiro.
- [ ]  Criar entidade Professor.
- [ ]  Relacionar os roteiros aos professores responsáveis pela revisão.
- [X]  Cadastrar pelo menos 6 roteiros.
- [ ]  Cada roteiro deve possuir:
  - [x]  Identificador único.
  - [X]  Título.
  - [X]  Disciplina.
  - [X]  Ano escolar.
  - [X]  Tema.
  - [X]  Explicação simplificada.
  - [X]  Questões de fixação.
  - [X]  Respostas das questões.
  - [X]  Tempo estimado de estudo.
  - [X]  Identificação de conteúdo gerado por IA.
  - [X]  Identificação do professor revisor.
- [ ]  Cada professor deve possuir:
  - [ ]  Nome.
  - [ ]  Disciplina.
  - [ ]  Escola.

### 3. Interface e componentes React

- [ ]  Criar página inicial.
- [ ]  Criar listagem de roteiros.
- [X]  Criar página de detalhes de um roteiro.
- [X]  Criar formulário de solicitação de novos roteiros.
- [ ]  Criar pelo menos 5 componentes React próprios, além das páginas.
- [ ]  Os componentes devem receber dados através de props.

**Controle dos componentes:**

- [ ]  Componente 1:
- [ ]  Componente 2:
- [ ]  Componente 3:
- [ ]  Componente 4:
- [ ]  Componente 5:

### 4. Rotas e navegação

- [ ]  Implementar pelo menos duas rotas.
- [ ]  Implementar pelo menos uma rota dinâmica.
- [ ]  Permitir abrir os detalhes de um roteiro específico.
- [ ]  Tratar identificadores inexistentes.
- [ ]  Permitir retornar à listagem de roteiros.

### 5. Consumo da API externa

- [X]  Escolher uma API pública, gratuita e sem chave de acesso.
- [X]  Consumir a API para obter textos de apoio relacionados aos temas dos roteiros.
- [ ]  Implementar estado de carregamento.
- [ ]  Implementar tratamento de erros.
- [X]  Implementar exibição dos dados quando a requisição for bem-sucedida.
- [X]  Garantir que uma falha na API não impeça a utilização do restante da aplicação.
- [X]  Garantir que o roteiro continue aparecendo mesmo quando o texto externo não carregar.

**API escolhida:** A definir.

### 6. Estados e interatividade

- [ ]  Utilizar `useState` em pelo menos uma interação do usuário.
- [ ]  Implementar filtros por disciplina.
- [ ]  Implementar filtros por ano escolar.
- [ ]  Permitir a seleção e abertura de roteiros.

### 7. Formulário de solicitação

Criar um formulário controlado para que professores possam solicitar novos roteiros.

**Campos obrigatórios:**

- [X]  Nome do professor.
- [X]  E-mail institucional.
- [X]  Disciplina.
- [X]  Ano escolar.
- [X]  Tema.
- [X]  Quantidade de questões.
- [ ]  Data prevista de utilização.

**Regras de validação:**

- [X]  Todos os campos devem ser preenchidos.
- [X]  O e-mail deve terminar com `@escola.educa.gov.br`.
- [X]  A quantidade de questões deve ser no mínimo 3.
- [X]  A quantidade de questões deve ser no máximo 10.
- [X]  A data de utilização deve ter pelo menos 7 dias de antecedência.
- [ ]  Exibir mensagens de erro para campos inválidos.
- [X]  Exibir feedback após o envio.
- [X]  Não enviar os dados para um servidor.

### 8. Testes e funcionamento

- [ ]  Executar a aplicação localmente sem erros.
- [ ]  Testar a navegação entre as páginas.
- [ ]  Testar a listagem de roteiros.
- [ ]  Testar a abertura de um roteiro.
- [ ]  Testar identificador inexistente.
- [ ]  Testar os filtros.
- [ ]  Testar as validações do formulário.
- [ ]  Testar a API em caso de sucesso.
- [ ]  Simular falha da API.
- [ ]  Confirmar que o restante da aplicação continua funcionando.
- [ ]  Gerar o build estático sem erros.
- [ ]  Extrair o ZIP em outra pasta e repetir os testes.

## 📅 Planejamento de execução

Período de desenvolvimento: **05/11/2026 a 14/11/2026**.


| Data  | Atividade                                             | Status |
| ----- | ----------------------------------------------------- | ------ |
| 05/11 | Análise do problema e definição da solução       | [X]    |
| 06/11 | Planejamento e protótipo das interfaces              | [X]    |
| 07/11 | Criação do repositório e configuração do Next.js | [X]    |
| 08/11 | Modelagem dos dados JSON                              | [X]    |
| 09/11 | Desenvolvimento dos componentes e páginas            | [X]    |
| 10/11 | Implementação das rotas e navegação               | [X]    |
| 11/11 | Integração com API externa                          | [X]    |
| 12/11 | Desenvolvimento e validação do formulário          | [X]    |
| 13/11 | Testes, correções e exportação estática          | [X]    |
| 14/11 | Relatório, revisão final e entrega                  | ⬜     |

## 📄 Entregáveis

- [ ]  PDF da Parte 1 contendo descrição da solução, plano de execução e protótipo.
- [ ]  Repositório Git público.
- [ ]  Histórico de commits durante o desenvolvimento.
- [ ]  Relatório de execução em PDF de até uma página.
- [ ]  Relatório incluído no repositório.
- [ ]  Projeto compactado em ZIP.
- [ ]  ZIP sem as pastas `node_modules` e `.next`.
- [ ]  Build estático incluído no ZIP.
- [ ]  Cópia do relatório incluída no ZIP.
- [ ]  Link do repositório informado na entrega.
- [ ]  ZIP enviado na entrega.

## 📊 Critérios de avaliação


| Critério               |     Peso |
| ----------------------- | -------: |
| Plano e protótipo      |      15% |
| Execução do plano     |      20% |
| Código e React/Next.js |      45% |
| Funcionamento           |      20% |
| **Total**               | **100%** |

## 📝 Histórico de alterações

Utilize esta seção para registrar alterações importantes em relação ao planejamento inicial e ao protótipo.


| Data | Alteração | Justificativa |
| ---- | ----------- | ------------- |
| -    | -           | -             |

---

**Legenda:**

- [ ]  Pendente
- [X]  Concluído

**Objetivo:** manter todos os requisitos da atividade visíveis durante o desenvolvimento e garantir que nenhuma exigência obrigatória seja esquecida.
