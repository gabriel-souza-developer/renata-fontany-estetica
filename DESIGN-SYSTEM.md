# Design system ("Capa e sumário")

- **Identidade e fontes das decisões:** rosa da marca e Didone caixa alta espaçada do Instagram
  (`referencia-cliente/post-outubro-rosa.jpg`); fúcsia de campanha só como cor de ação. Ver `DIRECAO-VISUAL.md`.
- **Cores:** `--cor-fundo #FBF5F2`, `--cor-nude #F3E4DE`, `--cor-ameixa #3B1E2B` (texto, 13,8:1),
  `--cor-texto-suave #6F5561` (6,2:1), `--cor-fucsia #B8175A` (ação; branco sobre ela 6,4:1),
  `--cor-fucsia-escura #9C1149` (hover), `--cor-rosa #E2779E` (decorativo), `--cor-rosa-claro #F4C9D6`
  (texto só sobre ameixa), `--cor-dourado #C9A25E` (fios), `--cor-dourado-texto #765A28` (números).
- **Tipografia:** Bodoni Moda (títulos caixa alta, números) e Jost (corpo, rótulos, botões), woff2
  locais em `src/assets/fonts/` (OFL). Sem itálico.
- **Espaço e grid:** margem `clamp(1.25rem, 5vw, 4rem)`; largura máxima 76rem; seções `clamp(4.5rem, 10vw, 8rem)`.
- **Forma: moldura de capa.** Retângulo de canto vivo com passe-partout nude (`.moldura`), fio dourado de
  1px. Sem clip-path, arco, chanfro ou círculo. Botões retos (raio 0).
- **Imagens:** banco gratuito Burst (`src/assets/img/banco/CREDITOS-FOTOS.md`), sem legenda e sem pessoa
  apresentada como a Renata.
- **Componentes:** cabeçalho com `<details>` no celular; botão `.botao--acao` (fúcsia) e `.botao--fio`
  (contorno ameixa); sumário `<ol data-fx-linha>`; matéria (`.materia`); ações flutuantes padrão.
- **Foco e acessibilidade:** foco visível 2px fúcsia com offset; contraste AA; links com texto claro.
- **Responsividade e movimento:** mobile-first; corte em 900px. Motor `data-fx` + `.abre` (tracking);
  `prefers-reduced-motion` respeitado pelo motor.
- **Tokens:** `src/index.css`.

## Escala tipográfica (obrigatória, tokens em `src/index.css`)
| Token | Uso | Fonte |
|---|---|---|
| `--t-nome` | nome da capa (desktop: até 8 colunas, nunca sobre a foto) | Bodoni |
| `--t-titulo` + `.titulo-secao` | todo h2 de seção, caixa alta | Bodoni |
| `--t-subtitulo` | h3 das matérias e nomes do sumário | Bodoni |
| `--t-destaque` + `.destaque` | um parágrafo de abertura por seção | Bodoni |
| `--t-corpo` | texto corrido | Jost |
| `--t-acao` | botões, menu, links de ação | Jost caixa alta |
| `--t-rotulo` + `.rotulo-secao` | rótulo acima do título | Jost caixa alta, dourado-texto |
| `--t-nota` | avisos e notas de fonte | Jost |

Nota do Google sempre no padrão `.nota` (número em Bodoni + versalete), com a data da consulta perto.
Nada de capitular, tamanho avulso ou link no meio de frase: texto da seção alinhado à mesma coluna do título.
