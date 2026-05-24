/**
 * extract-menu.js
 *
 * Extrai itens do cardápio do HTML copiado do Anota.ai.
 *
 * Como usar:
 *   1. Abra pedido.anota.ai/loja/broering-burguer-1 no browser
 *   2. Ctrl+A → Ctrl+C no DevTools > Elements (ou "Inspecionar" > copiar HTML do <section class="home">)
 *   3. Salve como anota.html na pasta do projeto
 *   4. node extract-menu.js
 */

import { readFileSync } from 'fs';

const html = readFileSync('anota.html', 'utf-8');

// Extrai todos os item-card
const itemRegex = /<div[^>]+class="item-card item"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;

const items = [];
let match;

while ((match = itemRegex.exec(html)) !== null) {
  const block = match[0];

  // Nome
  const nameMatch = block.match(/<h3[^>]+class="title"[^>]*>([\s\S]*?)<\/h3>/);
  const name = nameMatch ? nameMatch[1].trim() : '—';

  // Descrição
  const descMatch = block.match(/<p[^>]+class="description"[^>]*>([\s\S]*?)<\/p>/);
  const description = descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : '—';

  // Preço
  const priceMatch = block.match(/<p[^>]+class="price-value"[^>]*>([\s\S]*?)<\/p>/);
  const price = priceMatch ? priceMatch[1].replace(/&nbsp;/g, ' ').trim() : '—';

  // Imagem (webp preferencial)
  const srcsetMatch = block.match(/srcset="([^"]+\.webp)"/);
  const imgSrc = block.match(/src="(https:\/\/client-assets[^"]+)"/);
  const image = srcsetMatch ? srcsetMatch[1] : (imgSrc ? imgSrc[1] : '—');

  // Evita duplicatas (mesmo nome)
  if (!items.find(i => i.name === name)) {
    items.push({ name, price, description, image });
  }
}

// Saída como tabela legível
console.log('\n=== CARDÁPIO BROERING BURGUER ===\n');
console.log(`Total de itens únicos: ${items.length}\n`);

items.forEach((item, i) => {
  console.log(`[${String(i + 1).padStart(2, '0')}] ${item.name}`);
  console.log(`     Preço : ${item.price}`);
  console.log(`     Desc  : ${item.description.slice(0, 100)}${item.description.length > 100 ? '…' : ''}`);
  console.log(`     Imagem: ${item.image}`);
  console.log('');
});

// Também salva como JSON para uso no site
import { writeFileSync } from 'fs';
writeFileSync('menu.json', JSON.stringify(items, null, 2), 'utf-8');
console.log('✅ Salvo em menu.json');
