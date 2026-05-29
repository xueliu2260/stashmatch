export const PROJECT_CATALOG = [
  {
    name: 'Classic Scarf',
    minYardage: 350,
    weights: ['any'],
    preferredBrands: ['any'],
    preferredColors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray', 'white', 'black'],
    difficulty: 'Beginner',
    description: 'Simple long scarf, easy texture or stockinette.',
    imageUrl: '/assets/projects/scarf.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=scarf',
  },
  {
    name: 'Ribbed Beanie',
    minYardage: 160,
    weights: ['aran', 'worsted', 'bulky'],
    preferredBrands: ['cascade', 'lion brand', 'berroco'],
    preferredColors: ['gray', 'black', 'blue', 'green'],
    difficulty: 'Beginner',
    description: 'Quick hat, good one-skein project for cool weather.',
    imageUrl: '/assets/projects/beanie.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=ribbed%20beanie',
  },
  {
    name: 'Fingerless Mitts',
    minYardage: 200,
    weights: ['sport', 'dk', 'worsted'],
    preferredBrands: ['malabrigo', 'cascade', 'drops'],
    preferredColors: ['gray', 'blue', 'purple', 'pink', 'green'],
    difficulty: 'Intermediate',
    description: 'Useful accessory with shaping and ribbing practice.',
    imageUrl: '/assets/projects/mitts.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=fingerless%20mitts',
  },
  {
    name: 'Triangle Shawl',
    minYardage: 450,
    weights: ['fingering', 'sport', 'dk'],
    preferredBrands: ['malabrigo', 'hedgehog fibres', 'drops'],
    preferredColors: ['purple', 'blue', 'pink', 'green'],
    difficulty: 'Intermediate',
    description: 'Great for gradients and lightweight yarn blends.',
    imageUrl: '/assets/projects/shawl.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=triangle%20shawl',
  },
  {
    name: 'Baby Blanket',
    minYardage: 700,
    weights: ['dk', 'worsted', 'aran'],
    preferredBrands: ['bernat', 'lion brand', 'stylecraft'],
    preferredColors: ['pink', 'blue', 'yellow', 'white'],
    difficulty: 'Intermediate',
    description: 'Soft and practical gift knit with repeating stitch motifs.',
    imageUrl: '/assets/projects/blanket.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=baby%20blanket',
  },
  {
    name: 'Pullover Sweater',
    minYardage: 1200,
    weights: ['fingering', 'sport', 'dk', 'worsted'],
    preferredBrands: ['drops', 'cascade', 'rowan'],
    preferredColors: ['gray', 'black', 'blue', 'green', 'red'],
    difficulty: 'Advanced',
    description: 'Adult sweater quantity with fit and shaping.',
    imageUrl: '/assets/projects/sweater.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=pullover%20sweater',
  },
  {
    name: 'Socks (Pair)',
    minYardage: 400,
    weights: ['fingering', 'sport'],
    preferredBrands: ['regia', 'opal', 'west yorkshire spinners'],
    preferredColors: ['gray', 'blue', 'purple', 'green', 'red'],
    difficulty: 'Intermediate',
    description: 'Two-at-a-time or cuff-down socks.',
    imageUrl: '/assets/projects/socks.svg',
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=socks',
  },
];

export function getYarnSummary(yarnStock) {
  const byWeight = {};
  const byColorFamily = {};
  let totalYardage = 0;
  let totalSkeins = 0;

  for (const item of yarnStock) {
    const weight = normalizeWeight(item.weight);
    const colorFamily = colorToFamily(item.color);
    const quantity = toPositiveInt(item.quantity, 1);
    const yardageEach = toPositiveInt(item.yardage, 0);
    const yardage = quantity * yardageEach;

    byWeight[weight] = (byWeight[weight] ?? 0) + yardage;
    byColorFamily[colorFamily] = (byColorFamily[colorFamily] ?? 0) + yardage;
    totalYardage += yardage;
    totalSkeins += quantity;
  }

  return { byWeight, byColorFamily, totalYardage, totalSkeins };
}

export function recommendProjects(yarnStock, catalog = PROJECT_CATALOG) {
  const dominantWeight = getDominantWeight(yarnStock);
  const totalStashYardage = yarnStock.reduce((sum, item) => {
    const quantity = toPositiveInt(item.quantity, 1);
    const yardageEach = toPositiveInt(item.yardage, 0);
    return sum + (quantity * yardageEach);
  }, 0);

  const recommendations = catalog.map((project) => {
    const supportedWeights = project.weights.map(normalizeWeight);
    const preferredBrands = (project.preferredBrands ?? ['any']).map(normalizeBrand);
    const preferredColors = (project.preferredColors ?? ['any']).map(normalizeWeight);
    const acceptsAny = supportedWeights.includes('any');
    const acceptsAnyBrand = preferredBrands.includes('any');
    const acceptsAnyColor = preferredColors.includes('any');

    const weightChoices = acceptsAny
      ? [dominantWeight ?? 'any']
      : supportedWeights;
    let bestChoice = {
      selectedWeight: weightChoices[0] ?? 'any',
      usableYardage: 0,
      brandAlignedYardage: 0,
      colorAlignedYardage: 0,
      matchedColorHex: '#6a86a8',
    };

    for (const weightChoice of weightChoices) {
      let usableYardage = 0;
      let brandAlignedYardage = 0;
      let colorAlignedYardage = 0;
      const colorYardage = new Map();

      for (const item of yarnStock) {
        const weight = normalizeWeight(item.weight);
        const quantity = toPositiveInt(item.quantity, 1);
        const yardageEach = toPositiveInt(item.yardage, 0);
        const yardage = quantity * yardageEach;
        const brand = normalizeBrand(item.brand);
        const colorHex = normalizeHexColor(item.color);
        const colorFamily = colorToFamily(item.color);
        const weightMatch = weightChoice === 'any' || weight === weightChoice;
        const brandMatch = acceptsAnyBrand || preferredBrands.includes(brand);
        const colorMatch = acceptsAnyColor || preferredColors.includes(colorFamily);

        if (!weightMatch) {
          continue;
        }

        usableYardage += yardage;
        colorYardage.set(colorHex, (colorYardage.get(colorHex) ?? 0) + yardage);
        if (brandMatch) {
          brandAlignedYardage += yardage;
        }
        if (colorMatch) {
          colorAlignedYardage += yardage;
        }
      }

      const matchedColorHex = pickDominantColorHex(colorYardage);

      if (
        usableYardage > bestChoice.usableYardage
        || (usableYardage === bestChoice.usableYardage
          && (brandAlignedYardage + colorAlignedYardage) > (bestChoice.brandAlignedYardage + bestChoice.colorAlignedYardage))
      ) {
        bestChoice = {
          selectedWeight: weightChoice,
          usableYardage,
          brandAlignedYardage,
          colorAlignedYardage,
          matchedColorHex,
        };
      }
    }

    const usableYardage = bestChoice.usableYardage;
    const brandAlignedYardage = bestChoice.brandAlignedYardage;
    const colorAlignedYardage = bestChoice.colorAlignedYardage;

    const minYardage = Math.max(1, toPositiveInt(project.minYardage, 1));
    const coverage = usableYardage / minYardage;
    const feasible = coverage >= 1;
    const missingYardage = feasible ? 0 : minYardage - usableYardage;
    const brandMatchScore = usableYardage > 0 ? brandAlignedYardage / usableYardage : 0;
    const colorMatchScore = usableYardage > 0 ? colorAlignedYardage / usableYardage : 0;
    const weightMatchScore = totalStashYardage > 0 ? usableYardage / totalStashYardage : 0;
    const yardageFitScore = Math.min(coverage, 1);

    // User formula:
    // yardage 40% + weight 40% + brand 15% + color 5%.
    const score = (yardageFitScore * 40) + (weightMatchScore * 40) + (brandMatchScore * 15) + (colorMatchScore * 5);

    return {
      ...project,
      selectedWeight: bestChoice.selectedWeight,
      matchedColorHex: bestChoice.matchedColorHex,
      matchedTutorialUrl: buildWeightMatchedTutorialUrl(project.tutorialUrl, bestChoice.selectedWeight),
      usableYardage,
      brandAlignedYardage,
      colorAlignedYardage,
      brandMatchScore,
      colorMatchScore,
      weightMatchScore,
      yardageFitScore,
      feasible,
      missingYardage,
      coverage,
      score,
    };
  });

  return recommendations
    .filter((project) => project.usableYardage > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (a.feasible !== b.feasible) {
        return a.feasible ? -1 : 1;
      }
      return a.minYardage - b.minYardage;
    })
    .slice(0, 6);
}

function getDominantWeight(yarnStock) {
  const byWeight = new Map();
  for (const item of yarnStock) {
    const weight = normalizeWeight(item.weight);
    const quantity = toPositiveInt(item.quantity, 1);
    const yardageEach = toPositiveInt(item.yardage, 0);
    const yardage = quantity * yardageEach;
    byWeight.set(weight, (byWeight.get(weight) ?? 0) + yardage);
  }

  let bestWeight = null;
  let bestYardage = 0;
  for (const [weight, yardage] of byWeight.entries()) {
    if (yardage > bestYardage) {
      bestYardage = yardage;
      bestWeight = weight;
    }
  }
  return bestWeight;
}

function buildWeightMatchedTutorialUrl(baseUrl, selectedWeight) {
  const base = String(baseUrl ?? '');
  const weight = normalizeWeight(selectedWeight);
  if (!base || !weight || weight === 'any') {
    return base || '#';
  }

  const encodedWeight = encodeURIComponent(weight);
  if (base.includes('#')) {
    return `${base}&weight=${encodedWeight}`;
  }
  return `${base}#weight=${encodedWeight}`;
}

function toPositiveInt(value, fallback) {
  const num = Number.parseInt(String(value), 10);
  return Number.isFinite(num) && num > 0 ? num : fallback;
}

function normalizeWeight(weight) {
  return String(weight ?? '').trim().toLowerCase();
}

function normalizeBrand(brand) {
  return String(brand ?? '').trim().toLowerCase();
}

function normalizeHexColor(value) {
  const raw = String(value ?? '').trim().toLowerCase();
  if (/^#[0-9a-f]{6}$/u.test(raw)) {
    return raw;
  }
  return '#6a86a8';
}

function pickDominantColorHex(colorYardage) {
  let bestColor = '#6a86a8';
  let bestYardage = 0;

  for (const [colorHex, yardage] of colorYardage.entries()) {
    if (yardage > bestYardage) {
      bestYardage = yardage;
      bestColor = colorHex;
    }
  }
  return bestColor;
}

function colorToFamily(hexColor) {
  const { r, g, b } = parseHexColor(hexColor);
  const { h, s, l } = rgbToHsl(r, g, b);

  if (l <= 15) {
    return 'black';
  }
  if (l >= 90) {
    return 'white';
  }
  if (s <= 10) {
    return 'gray';
  }
  if (h < 15 || h >= 345) {
    return 'red';
  }
  if (h < 45) {
    return 'orange';
  }
  if (h < 65) {
    return 'yellow';
  }
  if (h < 170) {
    return 'green';
  }
  if (h < 250) {
    return 'blue';
  }
  if (h < 290) {
    return 'purple';
  }
  return 'pink';
}

function parseHexColor(hexColor) {
  const raw = String(hexColor ?? '').trim().toLowerCase();
  const compact = raw.startsWith('#') ? raw.slice(1) : raw;

  if (/^[0-9a-f]{6}$/u.test(compact)) {
    return {
      r: Number.parseInt(compact.slice(0, 2), 16),
      g: Number.parseInt(compact.slice(2, 4), 16),
      b: Number.parseInt(compact.slice(4, 6), 16),
    };
  }

  return { r: 106, g: 134, b: 168 };
}

function rgbToHsl(r, g, b) {
  const nr = r / 255;
  const ng = g / 255;
  const nb = b / 255;
  const max = Math.max(nr, ng, nb);
  const min = Math.min(nr, ng, nb);
  const delta = max - min;
  const l = (max + min) / 2;

  if (delta === 0) {
    return { h: 0, s: 0, l: l * 100 };
  }

  const s = delta / (1 - Math.abs(2 * l - 1));
  let hPrime = 0;

  if (max === nr) {
    hPrime = ((ng - nb) / delta) % 6;
  } else if (max === ng) {
    hPrime = ((nb - nr) / delta) + 2;
  } else {
    hPrime = ((nr - ng) / delta) + 4;
  }

  const h = hPrime * 60;
  return {
    h: h < 0 ? h + 360 : h,
    s: s * 100,
    l: l * 100,
  };
}
