import { getYarnSummary, recommendProjects } from './recommender.js';

const STORAGE_KEY = 'yarn-stock-v1';

const formEl = document.querySelector('[data-yarn-form]');
const stockListEl = document.querySelector('[data-stock-list]');
const projectListEl = document.querySelector('[data-project-list]');
const summaryEl = document.querySelector('[data-summary]');
const submitYarnBtn = document.querySelector('[data-submit-yarn]');
const cancelEditBtn = document.querySelector('[data-cancel-edit]');
const tutorialThumbCache = new Map();
const tutorialThumbPending = new Set();

let yarnStock = loadStock();
let editingId = null;
render();

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  const yarn = {
    id: crypto.randomUUID(),
    name: String(formData.get('name') ?? '').trim(),
    weight: String(formData.get('weight') ?? '').trim(),
    yardage: Number.parseInt(String(formData.get('yardage') ?? '0'), 10),
    quantity: Number.parseInt(String(formData.get('quantity') ?? '1'), 10),
    fiber: String(formData.get('fiber') ?? '').trim(),
    brand: String(formData.get('brand') ?? '').trim(),
    color: normalizeHexColor(formData.get('color')),
  };

  if (!yarn.name || !Number.isFinite(yarn.yardage) || yarn.yardage <= 0 || !Number.isFinite(yarn.quantity) || yarn.quantity <= 0) {
    return;
  }

  if (editingId) {
    yarnStock = yarnStock.map((item) => (item.id === editingId ? { ...item, ...yarn, id: item.id } : item));
    persistStock();
    render();
    resetFormMode();
    return;
  }

  addYarnEntries([yarn]);
  resetFormMode();
});

stockListEl.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.matches('[data-edit-id]')) {
    const id = target.getAttribute('data-edit-id');
    const item = yarnStock.find((entry) => entry.id === id);
    if (item) {
      startEdit(item);
    }
    return;
  }

  if (target.matches('[data-remove-id]')) {
    const id = target.getAttribute('data-remove-id');
    yarnStock = yarnStock.filter((item) => item.id !== id);
    if (editingId === id) {
      resetFormMode();
    }
    persistStock();
    render();
  }
});

cancelEditBtn.addEventListener('click', () => {
  resetFormMode();
});

function render() {
  renderStock();
  renderRecommendations();
}

function renderStock() {
  const summary = getYarnSummary(yarnStock);
  summaryEl.textContent = `${summary.totalSkeins} skein(s), ${summary.totalYardage} total yards`;

  if (yarnStock.length === 0) {
    stockListEl.innerHTML = '<li class="empty">No yarn added yet.</li>';
    return;
  }

  stockListEl.innerHTML = yarnStock
    .map((item) => {
      const total = item.yardage * item.quantity;
      return `
        <li class="stock-item">
          <div class="stock-main">
            <strong>${escapeHtml(item.name)}</strong>
            <div class="stock-actions">
              <button class="edit" type="button" data-edit-id="${item.id}">Edit</button>
              <button class="remove" type="button" data-remove-id="${item.id}">Remove</button>
            </div>
          </div>
          <div class="chips">
            <span class="chip">${escapeHtml(item.weight)}</span>
            <span class="chip">
              <span class="color-swatch" style="background:${normalizeHexColor(item.color)}"></span>
              ${normalizeHexColor(item.color)}
            </span>
            <span class="chip">${item.quantity} x ${item.yardage} yd = ${total} yd</span>
            ${item.fiber ? `<span class="chip">${escapeHtml(item.fiber)}</span>` : ''}
            ${item.brand ? `<span class="chip">Brand: ${escapeHtml(item.brand)}</span>` : ''}
          </div>
        </li>
      `;
    })
    .join('');
}

function renderRecommendations() {
  const recommendations = recommendProjects(yarnStock);

  if (recommendations.length === 0) {
    projectListEl.innerHTML = '<li class="empty">Add yarn to see project ideas.</li>';
    return;
  }

  projectListEl.innerHTML = recommendations
    .map((project) => {
      const isPulloverSweater = project.name === 'Pullover Sweater';
      const status = project.feasible
        ? `Ready now (${project.usableYardage} usable yd)`
        : `Need ${project.missingYardage} more yd`;
      const defaultChips = `
            <span class="chip">Difficulty: ${project.difficulty}</span>
            <span class="chip">Target: ${project.minYardage} yd</span>
            <span class="chip">Weights: ${project.weights.join(', ')}</span>
            <span class="chip">Matched weight: ${project.selectedWeight}</span>
            <span class="chip">Best brands: ${(project.preferredBrands ?? ['any']).join(', ')}</span>
            <span class="chip">Best colors: ${(project.preferredColors ?? ['any']).join(', ')}</span>
            <span class="chip">Weight fit: ${Math.round(project.weightMatchScore * 100)}%</span>
            <span class="chip">Yard fit: ${Math.round(project.yardageFitScore * 100)}%</span>
            <span class="chip">Brand fit: ${Math.round(project.brandMatchScore * 100)}%</span>
            <span class="chip">Color fit: ${Math.round(project.colorMatchScore * 100)}%</span>
      `;
      const pulloverChips = `
            <span class="chip">Weight fit: ${Math.round(project.weightMatchScore * 100)}%</span>
            <span class="chip">Yard fit: ${Math.round(project.yardageFitScore * 100)}%</span>
            <span class="chip">Brand fit: ${Math.round(project.brandMatchScore * 100)}%</span>
      `;
      const tutorialList = getTutorialList(
        project.matchedTutorialUrl ?? project.tutorialUrl ?? '#',
        project.name,
        project.matchedColorHex,
      );
      const tutorialThumbs = tutorialList.advanced_search_items.slice(0, 5);

      return `
        <li class="project-item">
          <a
            class="project-photo-link"
            href="${escapeHtml(project.matchedTutorialUrl ?? project.tutorialUrl ?? '#')}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ${escapeHtml(project.name)} tutorial"
          >
            <span class="project-image-wrap" style="--preview-color:${normalizeHexColor(project.matchedColorHex)}">
              <img
                class="project-image"
                src="${escapeHtml(project.imageUrl ?? '')}"
                data-fallback-src="${escapeHtml(generatePreviewDataUrl(project.name, project.matchedColorHex))}"
                onerror="this.onerror=null;this.src=this.dataset.fallbackSrc;"
                alt="${escapeHtml(project.name)}"
                loading="lazy"
              />
            </span>
          </a>
          <div class="project-main">
            <strong>${project.name}</strong>
            <span>${status}</span>
          </div>
          <div class="chips">
            ${isPulloverSweater ? pulloverChips : defaultChips}
          </div>
          <p>${project.description}</p>
          <div class="thumb-row">
            ${tutorialThumbs.length > 0
              ? tutorialThumbs.map((thumb, index) => `
                <a class="thumb-link" href="${escapeHtml(thumb.targetUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open tutorial result ${index + 1} for ${escapeHtml(project.name)}">
                  <img class="thumb-image" src="${escapeHtml(thumb.imageUrl)}" alt="${escapeHtml(project.name)} result ${index + 1}" loading="lazy" />
                </a>
              `).join('')
              : '<span class="thumb-note">Loading tutorial thumbnails...</span>'
            }
          </div>
          <a
            class="tutorial-link"
            href="${escapeHtml(project.matchedTutorialUrl ?? project.tutorialUrl ?? '#')}"
            target="_blank"
            rel="noopener noreferrer"
          >View tutorial</a>
        </li>
      `;
    })
    .join('');
}

function addYarnEntries(entries) {
  yarnStock = [...yarnStock, ...entries];
  persistStock();
  render();
}

function startEdit(item) {
  editingId = item.id;
  formEl.elements.name.value = item.name ?? '';
  formEl.elements.weight.value = item.weight ?? 'worsted';
  formEl.elements.yardage.value = String(item.yardage ?? '');
  formEl.elements.quantity.value = String(item.quantity ?? 1);
  formEl.elements.fiber.value = item.fiber ?? '';
  formEl.elements.brand.value = item.brand ?? '';
  formEl.elements.color.value = normalizeHexColor(item.color);
  submitYarnBtn.textContent = 'Update Yarn';
  cancelEditBtn.hidden = false;
}

function resetFormMode() {
  editingId = null;
  formEl.reset();
  formEl.elements.quantity.value = '1';
  formEl.elements.color.value = '#6a86a8';
  submitYarnBtn.textContent = 'Add Yarn';
  cancelEditBtn.hidden = true;
}

function persistStock() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(yarnStock));
}

function loadStock() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeHexColor(value) {
  const raw = String(value ?? '').trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/u.test(raw)) {
    return raw;
  }
  return '#6a86a8';
}

function generatePreviewDataUrl(projectName, colorHex) {
  const color = normalizeHexColor(colorHex);
  const label = escapeHtml(projectName);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${label}">
  <rect width="800" height="500" fill="#f2f3f5"/>
  <rect x="40" y="40" width="720" height="420" rx="24" fill="${color}" opacity="0.75"/>
  <text x="400" y="260" text-anchor="middle" font-size="44" font-family="Arial, sans-serif" fill="#ffffff">${label}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getTutorialList(baseTutorialUrl, projectName, colorHex) {
  const base = String(baseTutorialUrl ?? '').trim();
  if (!base || base === '#') {
    return { advanced_search_items: buildFallbackTutorialItems(base, projectName, colorHex), status: 'fallback' };
  }

  const fallbackItems = buildFallbackTutorialItems(base, projectName, colorHex);
  const cacheKey = base;
  if (tutorialThumbCache.has(cacheKey)) {
    const cached = tutorialThumbCache.get(cacheKey) ?? [];
    if (cached.length === 0) {
      return { advanced_search_items: fallbackItems, status: 'fallback' };
    }
    return {
      advanced_search_items: cached.slice(0, 5),
      status: 'ready',
    };
  }

  if (tutorialThumbPending.has(cacheKey)) {
    return { advanced_search_items: fallbackItems, status: 'loading' };
  }

  tutorialThumbPending.add(cacheKey);
  fetchAdvancedSearchItems(base)
    .then((items) => {
      tutorialThumbCache.set(cacheKey, items.length > 0 ? items.slice(0, 5) : []);
    })
    .catch(() => {
      tutorialThumbCache.set(cacheKey, []);
    })
    .finally(() => {
      tutorialThumbPending.delete(cacheKey);
      renderRecommendations();
    });

  return { advanced_search_items: fallbackItems, status: 'loading' };
}

function buildFallbackTutorialItems(baseTutorialUrl, projectName, colorHex) {
  const base = String(baseTutorialUrl ?? '').trim();
  if (!base || base === '#') {
    return [];
  }

  return Array.from({ length: 5 }, (_, i) => {
    const page = i + 1;
    const separator = base.includes('#') ? '&' : '#';
    const targetUrl = `${base}${separator}page=${page}`;
    const imageUrl = generateTutorialThumbDataUrl(projectName, page, colorHex);
    return { targetUrl, imageUrl };
  });
}

function generateTutorialThumbDataUrl(projectName, page, colorHex) {
  const color = normalizeHexColor(colorHex);
  const label = escapeHtml(projectName);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" role="img" aria-label="${label} tutorial ${page}">
  <rect width="320" height="320" fill="#f2f3f5"/>
  <rect x="16" y="16" width="288" height="288" rx="18" fill="${color}" opacity="0.82"/>
  <text x="160" y="144" text-anchor="middle" font-size="24" font-family="Arial, sans-serif" fill="#ffffff">${label}</text>
  <text x="160" y="188" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="#ffffff">Tutorial ${page}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

async function fetchAdvancedSearchItems(tutorialUrl) {
  const normalized = String(tutorialUrl ?? '').trim();
  if (!normalized || normalized === '#') {
    return [];
  }

  const proxyUrl = `https://r.jina.ai/http://${normalized.replace(/^https?:\/\//u, '')}`;
  const response = await fetch(proxyUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch tutorial HTML');
  }
  const html = await response.text();
  return parseAdvancedSearchItems(html);
}

function parseAdvancedSearchItems(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(html ?? ''), 'text/html');
  const container = doc.querySelector(
    'div.advanced_search__items.advanced_search__items--pattern_result_captioned_thumbs[data-view="captioned_thumbs"]',
  );
  if (!container) {
    return [];
  }

  const anchors = Array.from(container.querySelectorAll('a.photo'));
  return anchors
    .map((anchor) => {
      const href = anchor.getAttribute('href') ?? '';
      const img = anchor.querySelector('img');
      const src = img?.getAttribute('src') ?? img?.getAttribute('src-webp') ?? '';
      if (!href || !src) {
        return null;
      }
      return {
        targetUrl: normalizeRavelryUrl(href),
        imageUrl: src,
      };
    })
    .filter(Boolean)
    .slice(0, 5);
}

function normalizeRavelryUrl(url) {
  try {
    return new URL(url, 'https://www.ravelry.com').href;
  } catch {
    return 'https://www.ravelry.com';
  }
}
