import Link from "next/link";

interface CabecalhoProps {
  paginaAtiva: "inicio" | "professores";
}

export default function Cabecalho({
  paginaAtiva,
}: CabecalhoProps) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <Link href="/" className="logo">
          Roteiros<span> de Estudo</span>
        </Link>

        <nav>
          <Link
            href="/"
            aria-current={paginaAtiva === "inicio" ? "page" : undefined}
          >
            Início
          </Link>

          <Link
            href="/professores"
            aria-current={
              paginaAtiva === "professores" ? "page" : undefined
            }
          >
            Área do professor
          </Link>
        </nav>
      </div>
    </header>
  );
}