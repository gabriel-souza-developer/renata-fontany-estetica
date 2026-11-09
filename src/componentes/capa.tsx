import fotoCapa from "../assets/img/renata-fontany.jpg";
import { IconeWhatsapp } from "./icone-whatsapp";
import { NovaAba } from "./nova-aba";
import { MAPA, NOTA_GOOGLE, whatsapp } from "../dados";
import "./capa.css";

const LINKS = [
  { href: "#cuidados", texto: "Cuidados" },
  { href: "#clinica", texto: "A clínica" },
  { href: "#visita", texto: "Visita" },
];

export function Cabecalho() {
  const fechar = (e: React.MouseEvent<HTMLElement>) => {
    const menu = e.currentTarget.closest("details");
    if (menu) menu.open = false;
  };

  return (
    <header id="topo" className="cabecalho">
      <div className="capa__barra">
        <a className="capa__marca" href="#topo" aria-label="Clínica de Estética Renata Fontany, início">
          <span>Renata Fontany</span>
          <small>Clínica de estética</small>
        </a>

        <nav className="capa__nav" aria-label="Seções">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.texto}</a>
          ))}
          <a className="botao botao--fio capa__agendar" href={whatsapp()} target="_blank" rel="noopener">
            Agendar<NovaAba />
          </a>
        </nav>

        <details className="capa__menu">
          <summary>Menu</summary>
          <div className="capa__painel" onClick={fechar}>
            <nav aria-label="Seções no menu">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>{l.texto}</a>
              ))}
            </nav>
            <a className="botao botao--acao" href={whatsapp()} target="_blank" rel="noopener">
              <IconeWhatsapp />
              Agendar pelo WhatsApp<NovaAba />
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Capa() {
  return (
    <section className="capa" aria-labelledby="capa-titulo">
      <div className="capa__corpo">
        <p className="rotulo capa__rotulo" data-fx="surgir">Cidade Nova · Belo Horizonte</p>

        <h1 id="capa-titulo" className="capa__nome">
          <span className="abre" data-fx="surgir" data-fx-duracao="1200">Renata</span>
          <span className="abre" data-fx="surgir" data-fx-atraso="150" data-fx-duracao="1200">Fontany</span>
        </h1>

        <figure className="moldura capa__foto" data-fx="surgir" data-fx-atraso="250">
          <img src={fotoCapa} alt="Renata Fontany sorrindo, de camisa listrada" width="872" height="1090" />
        </figure>

        <div className="capa__texto">
          <p className="destaque" data-fx="subir" data-fx-atraso="300">
            Cuidado com a pele do rosto e do corpo, feito com calma e no tempo de cada pessoa.
          </p>
          <div className="capa__acoes" data-fx="subir" data-fx-atraso="400">
            <a className="botao botao--acao" href={whatsapp()} target="_blank" rel="noopener">
              <IconeWhatsapp />
              Agendar pelo WhatsApp<NovaAba />
            </a>
            <a className="capa__sumario" href="#cuidados">Ver os cuidados</a>
          </div>
          <div className="capa__avaliacao" data-fx="surgir" data-fx-atraso="500">
            <a className="nota toque" href={MAPA} target="_blank" rel="noopener">
              <strong>{NOTA_GOOGLE.nota}</strong> no Google · {NOTA_GOOGLE.avaliacoes} avaliações<NovaAba />
            </a>
            <p className="nota-fonte">Avaliações públicas no Google, consulta em {NOTA_GOOGLE.consulta}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
