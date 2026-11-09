# Wireframe ("Capa e sumário", 2026-11-09)

Base: Direção A de `DIRECAO-VISUAL.md`, adaptada a `PESQUISA-CONFORMIDADE.md`: o pico deixa de ser o
microagulhamento (fora até a cliente confirmar quem executa) e vira o sumário dos cuidados que podem
aparecer; a "carta da Renata" sai (não temos nenhuma fala dela) e entra "A clínica" só com dados públicos;
a capa não usa retrato que pareça ser a Renata (só temos fotos de banco), e sim uma foto anônima de pele.

## Desktop
1. **Capa (100svh mín.):** cabeçalho fino (Sumário · A clínica · Visita · botão reto "Agendar").
   Rótulo "CLÍNICA DE ESTÉTICA · CIDADE NOVA, BH"; "RENATA / FONTANY" em Bodoni caixa alta, ~90% da
   largura, a segunda linha cruzando a borda da foto emoldurada à direita (passe-partout nude).
   Frase curta, botão fúcsia "Agendar pelo WhatsApp" e link "Ver o sumário". Nota "4,9 no Google ·
   95 avaliações" em versalete dourado com link.
2. **A clínica:** coluna editorial com capitular, endereço no bairro, convite para conversar.
   Foto de ambiente emoldurada, menor, desencontrada.
3. **Sumário (pico):** título "NESTA EDIÇÃO"; lista numerada 01 a 04 em Bodoni grande com fio dourado e
   número de "página"; a linha ativa acende conforme a rolagem (`data-fx-linha`). Cada item é âncora.
4. **Cuidados:** uma "matéria" por item, página dupla alternada (foto emoldurada + número grande + texto +
   link de WhatsApp), desencontradas. Aviso fixo: indicação depende de avaliação individual.
5. **Visita (ameixa):** endereço, mapa do Google Maps incorporado + link "Como chegar", WhatsApp, Instagram.
6. **Rodapé ameixa:** nome, links, aviso de privacidade. WhatsApp flutuante + seta voltar ao topo.

## Celular
Mesma ordem. Capa: rótulo, nome em duas linhas, frase, botão, depois a foto emoldurada (o título nunca
fica "lá embaixo"). Menu em `<details>`. Sumário em lista simples; matérias empilhadas (foto, texto).

## Acessibilidade e movimento
- Sem JS: tudo visível; o sumário funciona por âncoras nativas.
- Assinatura "tracking que assenta": títulos em caixa alta entram com espaçamento 0,4em e fecham no valor
  final; com movimento reduzido, já entram prontos.

## Primeira dobra
- Observação no navegador e revisão independente: registrar abaixo.
