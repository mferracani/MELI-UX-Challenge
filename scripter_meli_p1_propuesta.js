/**
 * 🟡 MercadoLibre P1 Home — Propuesta de Mejora Visual
 *
 * Genera dos frames en Figma:
 * 1. "P1 — Actual (esquemático)" → estructura actual simplificada
 * 2. "P1 — Propuesta" → rediseño con mejor jerarquía y calidad visual
 *
 * Pegá este código en Scripter y presioná ▶
 */

async function main() {
  // ── Load fonts ──
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Black" });

  // ── Helpers ──
  function rgb(hex) {
    return {
      r: parseInt(hex.slice(1,3),16)/255,
      g: parseInt(hex.slice(3,5),16)/255,
      b: parseInt(hex.slice(5,7),16)/255
    };
  }
  function fill(c, op) { return [{ type:'SOLID', color:rgb(c), opacity: op||1 }]; }
  function noFill() { return []; }

  function shadow(y, blur, alpha) {
    return [{ type:'DROP_SHADOW', visible:true, blendMode:'NORMAL',
      color:{r:0,g:0,b:0,a:alpha||0.08}, offset:{x:0,y:y||2}, radius:blur||12, spread:0 }];
  }

  function gradient(c1, c2, angle) {
    // Simple vertical gradient
    return [{ type:'GRADIENT_LINEAR',
      gradientStops:[
        { position:0, color:{...rgb(c1), a:1} },
        { position:1, color:{...rgb(c2), a:1} }
      ],
      gradientTransform: [[0,1,0],[1,0,0]] // top to bottom
    }];
  }

  function makeFrame(parent, w, h, x, y, opts) {
    opts = opts || {};
    const f = figma.createFrame();
    f.name = opts.name || 'Frame';
    f.resize(w, h);
    f.x = x; f.y = y;
    f.fills = opts.color ? fill(opts.color, opts.opacity) :
              opts.gradient ? gradient(opts.gradient[0], opts.gradient[1]) : noFill();
    if (opts.radius != null) f.cornerRadius = opts.radius;
    if (opts.clip != null) f.clipsContent = opts.clip;
    if (opts.effects) f.effects = opts.effects;
    if (parent) parent.appendChild(f);
    return f;
  }

  function makeRect(parent, w, h, x, y, opts) {
    opts = opts || {};
    const r = figma.createRectangle();
    r.name = opts.name || 'rect';
    r.resize(w, h);
    r.x = x; r.y = y;
    r.fills = opts.color ? fill(opts.color, opts.opacity) : noFill();
    if (opts.radius != null) r.cornerRadius = opts.radius;
    if (opts.effects) r.effects = opts.effects;
    if (opts.stroke) { r.strokes = fill(opts.stroke); r.strokeWeight = opts.strokeW || 1; }
    if (parent) parent.appendChild(r);
    return r;
  }

  function makeEllipse(parent, size, x, y, opts) {
    opts = opts || {};
    const e = figma.createEllipse();
    e.resize(size, size);
    e.x = x; e.y = y;
    e.fills = opts.color ? fill(opts.color, opts.opacity) : noFill();
    if (opts.stroke) { e.strokes = fill(opts.stroke); e.strokeWeight = opts.strokeW || 1; }
    if (opts.effects) e.effects = opts.effects;
    if (parent) parent.appendChild(e);
    return e;
  }

  function addText(parent, str, size, style, color, x, y, opts) {
    opts = opts || {};
    const t = figma.createText();
    t.fontName = { family:'Inter', style: style };
    t.characters = str;
    t.fontSize = size;
    t.fills = fill(color, opts.opacity);
    t.x = x; t.y = y;
    if (opts.width) { t.textAutoResize = 'HEIGHT'; t.resize(opts.width, t.height); }
    if (opts.align) t.textAlignHorizontal = opts.align;
    if (opts.lineH) t.lineHeight = { unit:'PIXELS', value: opts.lineH };
    if (opts.letterS) t.letterSpacing = { unit:'PIXELS', value: opts.letterS };
    if (parent) parent.appendChild(t);
    return t;
  }

  // ── COLORES MELI ──
  const YELLOW = '#FFE600';
  const YELLOW_DARK = '#E6CF00';
  const BLUE = '#3483FA';
  const BLUE_LIGHT = '#D4E3FD';
  const GREEN = '#00A650';
  const GREEN_LIGHT = '#E6F7EE';
  const BLACK = '#1D1D1D';
  const DARK = '#333333';
  const GRAY = '#666666';
  const GRAY_LIGHT = '#999999';
  const GRAY_BG = '#EEEEEE';
  const WHITE = '#FFFFFF';
  const BG = '#F5F5F5';
  const ORANGE = '#FF7733';
  const RED_MELI = '#F23D4F';
  const PURPLE = '#A855F7';

  const PW = 390; // iPhone 15 width
  const PH = 844; // iPhone 15 height

  // ═══════════════════════════════════════════════════
  //  FRAME 1: P1 — ACTUAL (esquemático)
  // ═══════════════════════════════════════════════════
  const actual = makeFrame(null, PW, PH, 0, 0, {
    name: '📱 P1 — Actual (esquemático)', color: WHITE, clip: true
  });
  figma.currentPage.appendChild(actual);

  // Header amarillo
  makeRect(actual, PW, 100, 0, 0, { name:'Header bg', color: YELLOW });
  // Status bar placeholder
  addText(actual, '10:24', 14, 'Semi Bold', BLACK, 20, 16);
  // Search bar
  makeRect(actual, PW - 80, 36, 48, 52, { name:'Search bar', color: WHITE, radius: 18 });
  addText(actual, 'Buscar en Mercado Libre', 13, 'Regular', GRAY_LIGHT, 64, 61);
  // Avatar placeholder
  makeEllipse(actual, 32, 10, 54, { color: GRAY_BG });

  // Dirección
  makeRect(actual, PW, 28, 0, 100, { name:'Location bar', color: YELLOW });
  addText(actual, '📍 Calle Freire 1529 ›', 12, 'Regular', DARK, 16, 106);

  // Category tabs
  const tabsY = 132;
  makeRect(actual, PW, 36, 0, tabsY, { name:'Category tabs', color: WHITE });
  const cats = ['Todo','Tecnología','Hogar','Electro','Moda','Belleza'];
  cats.forEach(function(cat, i) {
    const tx = addText(actual, cat, 12, i===0 ? 'Bold' : 'Regular', i===0 ? BLUE : GRAY, 16 + i*64, tabsY+10);
  });

  // Banner promo grande
  const bannerY = 172;
  makeRect(actual, PW - 24, 120, 12, bannerY, { name:'Banner Promo', color: '#2D2D7C', radius: 8 });
  addText(actual, 'LIQUIDACIÓN TOTAL', 16, 'Black', WHITE, 28, bannerY+16);
  addText(actual, 'HASTA', 10, 'Regular', WHITE, 28, bannerY+40);
  addText(actual, '40%OFF', 24, 'Black', YELLOW, 28, bannerY+52);
  addText(actual, '18 CUOTAS\nSIN INTERÉS', 11, 'Bold', WHITE, 28, bannerY+86, { width: 120 });
  // Placeholder producto
  makeRect(actual, 100, 80, PW - 132, bannerY+20, { color: '#4040A0', radius: 6 });

  // Callout Meli+
  const calloutY = 302;
  makeRect(actual, PW - 24, 32, 12, calloutY, { name:'Callout Meli+', color: GREEN_LIGHT, radius: 6 });
  addText(actual, 'meli+  Viví Mercado Libre como un experto por $ 3.490  ›', 11, 'Medium', GREEN, 24, calloutY+9);

  // Quick access icons
  const iconsY = 348;
  addText(actual, 'Accesos rápidos', 10, 'Medium', GRAY_LIGHT, 16, iconsY - 4);
  const shortcuts = ['Ofertas','Afiliados','M. Play','Poci Tarj.','Restaur.','Moda'];
  shortcuts.forEach(function(name, i) {
    const cx = 28 + i * 62;
    makeEllipse(actual, 48, cx, iconsY + 16, { color: GRAY_BG });
    addText(actual, name, 9, 'Regular', GRAY, cx - 4, iconsY + 68, { width: 56, align: 'CENTER' });
  });

  // Novedades
  const novY = 448;
  addText(actual, 'Novedades', 16, 'Bold', BLACK, 16, novY);
  const brands = ['Colombians','Sillas outlet','Adidas','Topper','Mtl'];
  brands.forEach(function(b, i) {
    const cx = 16 + i * 72;
    makeEllipse(actual, 56, cx, novY + 30, { color: GRAY_BG, stroke: GRAY_BG, strokeW: 2 });
    addText(actual, b, 9, 'Regular', GRAY, cx - 2, novY + 92, { width: 60, align: 'CENTER' });
  });

  // Ofertas Relámpago
  const ofertasY = 570;
  makeRect(actual, PW, PH - ofertasY - 72, 0, ofertasY, { name:'Ofertas section', color: WHITE });
  addText(actual, 'OFERTAS RELÁMPAGO', 13, 'Black', BLACK, 16, ofertasY + 12);
  addText(actual, '01 : 35 : 04', 11, 'Bold', RED_MELI, PW - 110, ofertasY + 13);
  // Product cards
  for (var p = 0; p < 3; p++) {
    const px = 16 + p * 124;
    makeRect(actual, 112, 120, px, ofertasY + 38, { color: GRAY_BG, radius: 8 });
    addText(actual, '$ ' + (79990 - p * 20000).toLocaleString(), 12, 'Bold', BLACK, px + 8, ofertasY + 166);
  }

  // Tab bar
  const tabBarY = PH - 64;
  makeRect(actual, PW, 64, 0, tabBarY, { name:'Tab Bar', color: WHITE, effects: shadow(-2, 8, 0.06) });
  const tabs = ['Inicio','Categorías','Carrito','Videos','Más'];
  tabs.forEach(function(t, i) {
    addText(actual, t, 10, i===0 ? 'Bold' : 'Regular', i===0 ? BLUE : GRAY_LIGHT, 16 + i * 78, tabBarY + 38);
    makeEllipse(actual, 22, 22 + i * 78, tabBarY + 12, { color: i===0 ? BLUE : GRAY_BG });
  });

  // Label
  makeRect(actual, PW, 32, 0, PH - 32, { color: '#1D1D1D' });
  addText(actual, 'P1 — ACTUAL', 11, 'Bold', WHITE, PW/2 - 40, PH - 24);


  // ═══════════════════════════════════════════════════
  //  FRAME 2: P1 — PROPUESTA (rediseño)
  // ═══════════════════════════════════════════════════
  const propuesta = makeFrame(null, PW, PH, PW + 80, 0, {
    name: '📱 P1 — Propuesta (rediseño)', color: WHITE, clip: true
  });
  figma.currentPage.appendChild(propuesta);

  // ── STATUS BAR ──
  addText(propuesta, '10:24', 14, 'Semi Bold', BLACK, 20, 16);

  // ── HEADER REDISEÑADO ──
  // Gradiente amarillo más sutil, más corto, con search bar más prominente
  const headerProp = makeFrame(propuesta, PW, 108, 0, 0, {
    name: 'Header', color: YELLOW, clip: true
  });
  // Gradiente sutil al fondo del header
  makeRect(headerProp, PW, 20, 0, 88, { color: '#F5E100', opacity: 0.5 });

  // Search bar con sombra — más prominente
  const searchBar = makeFrame(propuesta, PW - 32, 44, 16, 48, {
    name: 'Search Bar', color: WHITE, radius: 22, effects: shadow(2, 16, 0.12)
  });
  // Icono lupa placeholder
  makeEllipse(searchBar, 18, 14, 13, { color: GRAY_BG });
  addText(searchBar, '🔍', 14, 'Regular', GRAY, 14, 12);
  addText(searchBar, 'Buscar en Mercado Libre', 14, 'Regular', GRAY_LIGHT, 40, 13);
  // Camera icon placeholder
  makeEllipse(searchBar, 24, PW - 32 - 40, 10, { color: GRAY_BG });

  // ── LOCATION — más limpio ──
  const locY = 112;
  const locBar = makeFrame(propuesta, PW, 36, 0, locY, { name: 'Location', color: WHITE });
  addText(locBar, '📍', 13, 'Regular', BLUE, 16, 9);
  addText(locBar, 'Calle Freire 1529, CABA', 13, 'Medium', BLACK, 36, 10);
  addText(locBar, '›', 16, 'Regular', GRAY_LIGHT, PW - 28, 8);

  // Divider sutil
  makeRect(propuesta, PW - 32, 1, 16, locY + 36, { color: GRAY_BG });

  // ── HERO BANNER — más impactante, full-width con gradiente ──
  const heroY = 156;
  const hero = makeFrame(propuesta, PW - 32, 148, 16, heroY, {
    name: 'Hero Banner', color: '#1A1A5E', radius: 16, clip: true,
    effects: shadow(4, 20, 0.15)
  });
  // Gradiente decorativo
  makeRect(hero, 200, 148, PW - 200, 0, { color: '#2828A0', opacity: 0.6 });
  // Badge
  makeRect(hero, 80, 24, 20, 16, { color: YELLOW, radius: 12 });
  addText(hero, '🔥 HOT', 11, 'Bold', '#1A1A5E', 32, 21);
  // Copy principal
  addText(hero, 'Liquidación\nTotal', 28, 'Black', WHITE, 20, 48, { width: 200, lineH: 32 });
  // Sub info
  makeRect(hero, 90, 28, 20, 112, { color: WHITE, radius: 14, opacity: 0.15 });
  addText(hero, 'Hasta 40% OFF', 12, 'Bold', WHITE, 30, 119);
  makeRect(hero, 120, 28, 118, 112, { color: WHITE, radius: 14, opacity: 0.15 });
  addText(hero, '18 cuotas sin interés', 11, 'Medium', WHITE, 126, 119);
  // Producto placeholder (esquemático)
  makeRect(hero, 100, 100, PW - 32 - 120, 24, { color: '#3030A0', radius: 12, opacity: 0.5 });

  // ── MELI+ CALLOUT — más elegante ──
  const meliY = 316;
  const meliCallout = makeFrame(propuesta, PW - 32, 44, 16, meliY, {
    name: 'Meli+ Callout', color: '#F0FAF4', radius: 12,
    effects: shadow(1, 6, 0.04)
  });
  // Barra lateral verde
  makeRect(meliCallout, 3, 28, 12, 8, { color: GREEN, radius: 2 });
  addText(meliCallout, 'meli+', 12, 'Black', GREEN, 24, 7);
  addText(meliCallout, 'Viví como experto por $3.490/mes', 12, 'Regular', DARK, 24, 23);
  // CTA arrow
  makeEllipse(meliCallout, 28, PW - 32 - 44, 8, { color: GREEN, opacity: 0.1 });
  addText(meliCallout, '›', 16, 'Bold', GREEN, PW - 32 - 36, 7);

  // ── ACCESOS RÁPIDOS — rediseño con cards en vez de círculos ──
  const qY = 376;
  addText(propuesta, 'Accesos rápidos', 14, 'Bold', BLACK, 16, qY);

  const quickItems = [
    { name: 'Ofertas', emoji: '⚡', bg: '#FFF3E0', accent: ORANGE },
    { name: 'M. Play', emoji: '🎬', bg: '#EDE7F6', accent: PURPLE },
    { name: 'Gana $', emoji: '💰', bg: '#E8F5E9', accent: GREEN },
    { name: 'Envío\ngratis', emoji: '📦', bg: BLUE_LIGHT, accent: BLUE },
    { name: 'Restaur.', emoji: '🍔', bg: '#FFF8E1', accent: '#F59E0B' },
  ];

  quickItems.forEach(function(item, i) {
    const qx = 16 + i * 74;
    const qCard = makeFrame(propuesta, 66, 76, qx, qY + 28, {
      name: 'Quick/' + item.name, color: item.bg, radius: 14,
      effects: shadow(1, 8, 0.05)
    });
    // Emoji grande centrado
    addText(qCard, item.emoji, 22, 'Regular', BLACK, 20, 8);
    // Label
    addText(qCard, item.name, 10, 'Semi Bold', item.accent, 4, 42, {
      width: 58, align: 'CENTER', lineH: 13
    });
  });

  // ── SECCIÓN: NOVEDADES — con cards más grandes y con imagen ──
  const nY = 494;
  addText(propuesta, 'Novedades para vos', 14, 'Bold', BLACK, 16, nY);
  addText(propuesta, 'Ver todas ›', 12, 'Medium', BLUE, PW - 90, nY + 2);

  const novItems = ['Colombians','Sillas Outlet','Adidas','Topper'];
  novItems.forEach(function(brand, i) {
    const nx = 16 + i * 92;
    const nCard = makeFrame(propuesta, 84, 100, nx, nY + 28, {
      name: 'Brand/' + brand, color: WHITE, radius: 14,
      effects: shadow(2, 12, 0.08)
    });
    // Image placeholder
    makeRect(nCard, 84, 56, 0, 0, { color: GRAY_BG, radius: 14 });
    // Brand name
    addText(nCard, brand, 10, 'Semi Bold', DARK, 8, 64, { width: 68, lineH: 13 });
    // Tag "nuevo"
    if (i < 2) {
      makeRect(nCard, 40, 16, 6, 44, { color: GREEN, radius: 8, opacity: 0.9 });
      addText(nCard, 'Nuevo', 8, 'Bold', WHITE, 13, 48);
    }
  });

  // ── SECCIÓN: OFERTAS RELÁMPAGO — mejor diseño del timer y cards ──
  const oY = 636;
  const ofertasBg = makeFrame(propuesta, PW, 200, 0, oY, {
    name: 'Ofertas Relámpago', color: '#FFF8F0', clip: false
  });
  // Header de sección
  addText(ofertasBg, '⚡ OFERTAS RELÁMPAGO', 12, 'Black', ORANGE, 16, 16);
  // Timer badge
  const timerBadge = makeFrame(ofertasBg, 88, 24, PW - 104, 12, {
    name: 'Timer', color: RED_MELI, radius: 12
  });
  addText(timerBadge, '01 : 35 : 04', 10, 'Bold', WHITE, 12, 6);

  // Product cards mejoradas
  for (var pc = 0; pc < 3; pc++) {
    const pcx = 16 + pc * 124;
    const pCard = makeFrame(ofertasBg, 112, 148, pcx, 48, {
      name: 'Product card ' + (pc+1), color: WHITE, radius: 14,
      effects: shadow(2, 12, 0.08)
    });
    // Image area
    makeRect(pCard, 112, 80, 0, 0, { color: GRAY_BG, radius: 14 });
    // Discount badge
    makeRect(pCard, 48, 18, 6, 6, { color: GREEN, radius: 9 });
    addText(pCard, (20 + pc*5) + '% OFF', 8, 'Bold', WHITE, 10, 10);
    // Price
    addText(pCard, '$' + (79990 - pc * 20000).toLocaleString(), 14, 'Bold', BLACK, 10, 88);
    // Envío gratis
    addText(pCard, 'Envío gratis', 10, 'Medium', GREEN, 10, 108);
    // Rating
    addText(pCard, '★★★★☆', 10, 'Regular', '#F59E0B', 10, 126);
    addText(pCard, '(1.2k)', 9, 'Regular', GRAY_LIGHT, 58, 127);
  }

  // ── TAB BAR — rediseñada con indicador más limpio ──
  const tbY = PH - 72;
  const tabBar2 = makeFrame(propuesta, PW, 72, 0, tbY, {
    name: 'Tab Bar', color: WHITE, effects: shadow(-2, 12, 0.06)
  });
  const tabItems = [
    { name: 'Inicio', active: true },
    { name: 'Categorías', active: false },
    { name: 'Carrito', active: false },
    { name: 'Videos', active: false },
    { name: 'Más', active: false },
  ];
  tabItems.forEach(function(tab, i) {
    const tx = 10 + i * (PW/5);
    const tabColor = tab.active ? BLUE : GRAY_LIGHT;
    // Icon placeholder
    const iconFrame = makeFrame(tabBar2, 32, 32, tx + 20, 8, {
      color: tab.active ? BLUE_LIGHT : WHITE, radius: 16
    });
    makeEllipse(iconFrame, 16, 8, 8, { color: tabColor, opacity: 0.6 });
    // Active indicator dot
    if (tab.active) {
      makeEllipse(tabBar2, 5, tx + 33, 42, { color: BLUE });
    }
    // Label
    addText(tabBar2, tab.name, 10, tab.active ? 'Bold' : 'Regular', tabColor, tx + 4, 48, {
      width: 68, align: 'CENTER'
    });
  });

  // Label de propuesta
  makeRect(propuesta, PW, 32, 0, PH - 32, { color: GREEN });
  addText(propuesta, 'P1 — PROPUESTA', 11, 'Bold', WHITE, PW/2 - 52, PH - 24);


  // ═══════════════════════════════════════════════════
  //  FRAME 3: NOTAS — Cambios principales
  // ═══════════════════════════════════════════════════
  const notes = makeFrame(null, 420, PH, (PW + 80) * 2, 0, {
    name: '📝 Cambios P1', color: WHITE, clip: true
  });
  figma.currentPage.appendChild(notes);

  addText(notes, '📝 Cambios principales', 20, 'Bold', BLACK, 24, 24);

  const changes = [
    { title: '1. Header más limpio', desc: 'Search bar con sombra prominente y más padding. Location bar separado visualmente con divider sutil.' },
    { title: '2. Hero banner premium', desc: 'Banner más alto con radius 16px, badge de "HOT", tipografía más grande, y sombra para dar profundidad. Sensación de campaña importante.' },
    { title: '3. Callout meli+ elegante', desc: 'Barra lateral verde como accent, fondo suave, ícono direccional. Se integra sin competir con el hero.' },
    { title: '4. Accesos rápidos como cards', desc: 'En vez de círculos genéricos, cards con color semántico, emoji grande y label claro. Más tappable y distinguibles.' },
    { title: '5. Novedades con cards imagen', desc: 'Cards verticales con imagen + nombre + badge "Nuevo". Más scaneable que los círculos actuales.' },
    { title: '6. Ofertas Relámpago rediseñadas', desc: 'Timer en badge rojo pill, product cards con discount badge, rating y envío gratis integrado. Más conversión.' },
    { title: '7. Tab bar refinada', desc: 'Active state con fondo azul claro + dot indicator. Más limpio y moderno que el actual.' },
    { title: '8. Spacing y ritmo visual', desc: 'Más whitespace entre secciones. Cada bloque respira. Jerarquía clara: Hero > Quick access > Novedades > Ofertas.' },
  ];

  changes.forEach(function(change, i) {
    const cy = 70 + i * 92;
    // Number badge
    makeRect(notes, 372, 80, 24, cy, { color: BG, radius: 12 });
    addText(notes, change.title, 14, 'Bold', BLACK, 40, cy + 12);
    addText(notes, change.desc, 12, 'Regular', GRAY, 40, cy + 34, { width: 340, lineH: 17 });
  });

  // Zoom to see everything
  figma.viewport.scrollAndZoomIntoView([actual, propuesta, notes]);
  figma.notify('✅ 3 frames creados: Actual + Propuesta + Notas de cambios', { timeout: 4000 });
}

main();
