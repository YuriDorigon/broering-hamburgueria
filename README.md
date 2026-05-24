# 🍔 Broering Hamburgueria — Site Institucional

Site landing page para a **Broering Burguer**, hamburgueria artesanal localizada em São José / SC.

## 🔗 Links

- **Site ao vivo:** https://yuridorigon.github.io/broering-hamburgueria/
- **Repositório:** https://github.com/YuriDorigon/broering-hamburgueria
- **Pedido online:** https://app.anota.ai/p/broering-burguer-1
- **Instagram:** https://instagram.com/broeringburguer

## 📋 Sobre o projeto

Landing page institucional com cardápio completo, informações de contato e links para pedido online. Desenvolvido como projeto freelance.

### Seções
- **Hero** — apresentação com CTA para pedido
- **Sobre** — história e stats da hamburgueria
- **Cardápio** — 13 hambúrgueres com fotos e preços reais
- **Diferenciais** — pão artesanal, carne selecionada, molhos da casa
- **Contato** — endereço, WhatsApp, Instagram, horários, formas de pagamento

## 🛠️ Tech stack

- HTML5 + CSS3 puro (sem framework)
- Vite (dev server + build)
- Fontes: Anton, Oswald, Caveat, Manrope (Google Fonts)
- Imagens: CDN Anota.ai (`client-assets.anota.ai`)
- Deploy: Vercel + GitHub

## 🚀 Rodar localmente

```bash
npm install
npm run dev
```

Acessa em `http://localhost:5173`

## 📦 Build para produção

```bash
npm run build
npm run preview
```

## 🔄 Atualizar cardápio

Quando o cardápio mudar no Anota.ai:

1. Abrir `pedido.anota.ai/loja/broering-burguer-1` no browser
2. F12 → inspecionar `<section class="home">` → Copy element
3. Salvar como `anota.html` na pasta do projeto
4. Rodar `node extract-menu.js`
5. Atualizar `index.html` com os dados do `menu.json`

## 📍 Dados da loja

| Campo | Info |
|-------|------|
| Endereço | Rua Princesa Isabel, 55 · Forquilhinhas · São José / SC |
| CEP | 88106-730 |
| WhatsApp | (48) 98465-3311 |
| Instagram | @broeringburguer |
| Seg–Qui | 19h30 — 00h30 |
| Sex–Sáb | 19h30 — 01h30 |
| Domingo | Fechado |
