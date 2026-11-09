import foto from "../assets/img/banco/maos-pele.jpg";
import { NovaAba } from "./nova-aba";
import { whatsapp } from "../dados";
import "./clinica.css";

export function Clinica() {
  return (
    <section id="clinica" className="clinica" aria-labelledby="clinica-titulo">
      <div className="clinica__grade">
        <p className="rotulo rotulo-secao clinica__rotulo" data-fx="surgir">A clínica</p>
        <h2 id="clinica-titulo" className="titulo-secao clinica__titulo abre" data-fx="surgir">
          Um endereço na Cidade Nova
        </h2>

        <div className="clinica__texto" data-fx="subir" data-fx-atraso="150">
          <p className="destaque">
            A Clínica de Estética Renata Fontany fica no bairro Cidade Nova, em Belo Horizonte, e cuida da pele
            do rosto e do corpo.
          </p>
          <p>
            O primeiro passo é uma conversa. Você conta o que gostaria de cuidar e, depois de uma avaliação, a
            clínica indica o que faz sentido no seu caso.
          </p>
          <a className="botao botao--fio" href={whatsapp("Olá! Vim pelo site e gostaria de conversar sobre uma avaliação.")} target="_blank" rel="noopener">
            Conversar com a clínica<NovaAba />
          </a>
        </div>

        <figure className="moldura clinica__foto" data-fx="surgir" data-fx-atraso="250">
          <img src={foto} alt="Mãos sobrepostas sobre fundo bege claro" width="1600" height="2400" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
