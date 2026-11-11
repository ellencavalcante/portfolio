# Portfólio — site público (esqueleto)

Primeira versão do site: páginas públicas em inglês e português, com um case
resumido como modelo. A área privada e o painel entram depois.

## Como ver o site no seu computador

1. Instale o Node.js (versão 20 ou mais nova): https://nodejs.org
2. Abra o Terminal dentro desta pasta e rode `npm install` (só na primeira vez)
3. Rode `npm run dev`
4. Abra http://localhost:3000 no navegador

## Onde mexer

| Quero mudar…                         | Arquivo                |
| ------------------------------------ | ---------------------- |
| Nome, e-mail de contato, LinkedIn    | `content/site.ts`      |
| Textos da home, sobre, menu, botões  | `content/i18n.ts`      |
| Cases (adicionar, editar, publicar)  | `content/cases.ts`     |
| Cores, fontes, espaçamentos          | `app/globals.css`      |

## Estrutura

- `app/[lang]/` — as páginas. `[lang]` é o idioma no endereço (`/en`, `/pt`)
  - `page.tsx` — home
  - `about/page.tsx` — sobre
  - `cases/page.tsx` — lista de cases
  - `cases/[slug]/page.tsx` — página de um case
  - `layout.tsx` — cabeçalho e rodapé, comuns a todas
- `components/` — peças reutilizadas (cabeçalho, seletor de idioma, card de case)
- `content/` — todos os textos do site
- `proxy.ts` — escolhe o idioma pelo navegador de quem acessa

## Pendências antes de publicar

- Trocar o e-mail e o LinkedIn em `content/site.ts`
- Revisar os textos (são rascunhos) e os números da home quanto ao NDA
- Aplicar o layout definitivo
