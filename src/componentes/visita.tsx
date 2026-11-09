import { IconeWhatsapp } from "./icone-whatsapp";
import { NovaAba } from "./nova-aba";
import { BAIRRO_CIDADE, CEP, ENDERECO, INSTAGRAM, INSTAGRAM_ARROBA, MAPA, MAPA_EMBED, NOME, TELEFONE_LEGIVEL, whatsapp } from "../dados";
import "./visita.css";

export function Visita() {
  return (
      <section id="visita" className="visita" aria-labelledby="visita-titulo">
        <div className="visita__grade">
          <p className="rotulo rotulo-secao visita__rotulo" data-fx="surgir">Visita</p>
          <h2 id="visita-titulo" className="titulo-secao abre" data-fx="surgir">Marque um horário</h2>

          <div className="visita__acao" data-fx="subir" data-fx-atraso="150">
            <p className="destaque">O agendamento é feito pelo WhatsApp. Conte o que você gostaria de cuidar e combine o melhor dia.</p>
            <a className="botao botao--acao" href={whatsapp()} target="_blank" rel="noopener">
              <IconeWhatsapp />
              Agendar pelo WhatsApp<NovaAba />
            </a>
          </div>

          <dl className="visita__dados" data-fx="subir" data-fx-atraso="250">
            <div>
              <dt className="rotulo">Endereço</dt>
              <dd>
                {ENDERECO}
                <br />
                {BAIRRO_CIDADE}<br />
                <span className="sem-quebra">CEP {CEP}</span>
                <br />
                <a className="toque" href={MAPA} target="_blank" rel="noopener">Como chegar<NovaAba /></a>
              </dd>
            </div>
            <div>
              <dt className="rotulo">WhatsApp</dt>
              <dd>
                <a className="toque" href={whatsapp()} target="_blank" rel="noopener">{TELEFONE_LEGIVEL}<NovaAba /></a>
              </dd>
            </div>
            <div>
              <dt className="rotulo">Instagram</dt>
              <dd>
                <a className="toque" href={INSTAGRAM} target="_blank" rel="noopener">{INSTAGRAM_ARROBA}<NovaAba /></a>
              </dd>
            </div>
          </dl>

          <figure className="moldura visita__mapa" data-fx="surgir" data-fx-atraso="300">
            <div className="visita__mapa-recorte">
              <iframe
                src={MAPA_EMBED}
                title="Mapa com a localização da Clínica de Estética Renata Fontany"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </figure>
        </div>
      </section>
  );
}

export function Rodape() {
  return (
      <footer className="rodape">
        <div className="rodape__grade">
          <p className="rodape__nome">Renata Fontany</p>
          <p className="rodape__linha">{NOME} · {BAIRRO_CIDADE}</p>
          <p className="rodape__linha">
            <a className="toque" href="aviso-privacidade.html">Aviso de privacidade</a>
          </p>
        </div>
      </footer>
  );
}
