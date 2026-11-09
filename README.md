# Clínica de Estética Renata Fontany

Landing page estática (React + Vite, pré-renderizada) da Clínica de Estética Renata Fontany,
Cidade Nova, Belo Horizonte. Feita com o motor-landing-pages, direção "Capa e sumário".

Publicada em: https://gabriel-souza-developer.github.io/renata-fontany-estetica/

## Rodar e gerar o build

```bash
npm install
npm run dev        # desenvolvimento
npx vite build     # gera dist/
node prerenderizar.mjs   # grava o HTML já renderizado em dist/index.html (legível sem JS)
```

O `prerenderizar.mjs` usa o detector de navegador do motor (`../../scripts/lib/navegador.mjs`), então
roda de dentro do repositório motor-landing-pages. O `dist/` usa caminhos relativos e funciona no
GitHub Pages (subpasta) ou em domínio próprio.

## Conteúdo e conformidade

- Dados da clínica em `src/dados.ts` (endereço, WhatsApp, Instagram, nota do Google com data).
- Regras de texto e o que ainda depende da cliente: `BRIEF.md` e `PESQUISA-CONFORMIDADE.md`.
- Escala tipográfica e cores: `DESIGN-SYSTEM.md`.
- Única conexão externa: o mapa do Google Maps na seção Visita (registrado no aviso de privacidade).
