import fotoLimpeza from "../assets/img/banco/maos-pote.jpg";
import fotoMassagem from "../assets/img/banco/rosto-sorriso.jpg";
import fotoDrenagem from "../assets/img/banco/ombro.jpg";
import fotoProtocolos from "../assets/img/banco/adesivo-olhos.jpg";
import { IconeWhatsapp } from "./icone-whatsapp";
import { NovaAba } from "./nova-aba";
import { whatsapp } from "../dados";
import "./cuidados.css";

type Cuidado = {
  id: string;
  numero: string;
  titulo: string;
  linha: string;
  texto: string;
  foto: string;
  alt: string;
  largura: number;
  altura: number;
};

const CUIDADOS: Cuidado[] = [
  {
    id: "limpeza-de-pele",
    numero: "01",
    titulo: "Limpeza de pele",
    linha: "Para o rosto",
    texto:
      "Higienização da pele do rosto em etapas, com produtos escolhidos para o seu tipo de pele. Um cuidado de rotina para a pele.",
    foto: fotoLimpeza,
    alt: "Mãos segurando um pote de creme aberto",
    largura: 1600,
    altura: 2279,
  },
  {
    id: "massagem-facial",
    numero: "02",
    titulo: "Massagem facial",
    linha: "Para o rosto",
    texto:
      "Manobras manuais no rosto e no pescoço, num momento de pausa. A intensidade e a duração são combinadas com você.",
    foto: fotoMassagem,
    alt: "Mulher sorrindo, de blusa branca, com o rosto parcialmente fora do quadro",
    largura: 1600,
    altura: 1067,
  },
  {
    id: "drenagem-linfatica",
    numero: "03",
    titulo: "Drenagem linfática",
    linha: "Para o corpo",
    texto:
      "Técnica manual, com movimentos leves e ritmados. Antes de começar, a clínica conversa com você para entender se a drenagem é indicada no seu caso.",
    foto: fotoDrenagem,
    alt: "Mão apoiada no ombro, sobre fundo branco",
    largura: 1600,
    altura: 1068,
  },
  {
    id: "protocolos-faciais",
    numero: "04",
    titulo: "Protocolos faciais",
    linha: "Para o rosto",
    texto:
      "Sequências de cuidado com cosméticos, montadas a partir da avaliação da sua pele.",
    foto: fotoProtocolos,
    alt: "Mulher sorrindo, com adesivos dourados sob os olhos",
    largura: 1600,
    altura: 1067,
  },
];

export function Cuidados() {
  return (
    <section id="cuidados" className="cuidados" aria-labelledby="sumario-titulo">
      <div className="sumario">
        <p className="rotulo rotulo-secao" data-fx="surgir">Sumário</p>
        <h2 id="sumario-titulo" className="titulo-secao abre" data-fx="surgir">Os cuidados</h2>

        <ol className="sumario__lista" data-fx-linha>
          {CUIDADOS.map((c) => (
            <li key={c.id} className="fx-passo sumario__item">
              <a href={"#" + c.id}>
                <span className="sumario__numero">{c.numero}</span>
                <span className="sumario__nome">{c.titulo}</span>
                <span className="sumario__linha rotulo">{c.linha}</span>
              </a>
            </li>
          ))}
        </ol>

        <p className="aviso sumario__aviso">
          A indicação de cada cuidado depende de avaliação individual.
        </p>
      </div>

      <div className="materias">
        {CUIDADOS.map((c, i) => (
          <article key={c.id} id={c.id} className={"materia" + (i === 2 ? " materia--panorama" : i % 2 ? " materia--inversa" : "")} aria-labelledby={c.id + "-titulo"}>
            <figure className={"moldura materia__foto" + (c.altura > c.largura ? " materia__foto--alta" : "")} data-fx={i === 2 ? "surgir" : i % 2 ? "esquerda" : "direita"}>
              <img src={c.foto} alt={c.alt} width={c.largura} height={c.altura} loading="lazy" />
            </figure>
            <div className="materia__texto" data-fx="subir" data-fx-atraso="150">
              <p className="rotulo materia__linha"><span className="materia__numero">{c.numero}</span> {c.linha}</p>
              <h3 id={c.id + "-titulo"} className="materia__titulo">{c.titulo}</h3>
              <p className="materia__descricao">{c.texto}</p>
              <a
                className="materia__link"
                href={whatsapp(`Olá! Vim pelo site e quero saber mais sobre ${c.titulo.toLowerCase()}.`)}
                target="_blank"
                rel="noopener"
                >
                <IconeWhatsapp />
                Perguntar pelo WhatsApp<span className="sr-only"> sobre {c.titulo.toLowerCase()}</span><NovaAba />
              </a>
            </div>
          </article>
        ))}
        <p className="aviso materias__aviso">
          Os cuidados descritos acima não substituem acompanhamento médico. A indicação depende de avaliação individual.
        </p>
      </div>
    </section>
  );
}
