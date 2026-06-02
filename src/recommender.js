export const MOCK_INVENTORY_EXAMPLES = [
  {
    id: 'mock-evening-haze',
    name: 'Evening Haze',
    colorName: 'Stone Blue',
    weight: 'fingering',
    yardage: 220,
    quantity: 1,
    fiber: 'Wool',
    brand: 'Mock Stash',
    color: '#6f8fb1',
  },
  {
    id: 'mock-cloud-merino',
    name: 'Cloud Merino',
    colorName: 'Oatmeal Ivory',
    weight: 'dk',
    yardage: 240,
    quantity: 1,
    fiber: 'Merino wool',
    brand: 'Mock Stash',
    color: '#ded3bf',
  },
  {
    id: 'mock-heather-fern',
    name: 'Heather Fern',
    colorName: 'Moss Heather',
    weight: 'worsted',
    yardage: 210,
    quantity: 1,
    fiber: 'Wool',
    brand: 'Mock Stash',
    color: '#78956f',
  },
  {
    id: 'mock-honey-tea',
    name: 'Honey Tea',
    colorName: 'Warm Amber',
    weight: 'aran',
    yardage: 180,
    quantity: 1,
    fiber: 'Wool',
    brand: 'Mock Stash',
    color: '#c98c49',
  },
  {
    id: 'mock-cocoa-bloom',
    name: 'Cocoa Bloom',
    colorName: 'Cinnamon Brown',
    weight: 'bulky',
    yardage: 150,
    quantity: 1,
    fiber: 'Brushed alpaca',
    brand: 'Mock Stash',
    color: '#8a5c42',
  },
  {
    id: 'mock-rose-linen',
    name: 'Rose Linen',
    colorName: 'Dusty Rose',
    weight: 'sport',
    yardage: 200,
    quantity: 1,
    fiber: 'Wool',
    brand: 'Mock Stash',
    color: '#c98795',
  },
];

export const PATTERN_CATALOG = [
  {
    id: 'blue-gray-hat',
    name: 'Blue-Gray Hat',
    designer: 'Juniper Thread Co.',
    type: 'Hat',
    needleMm: 5,
    yardageTarget: 160,
    mainColorFamilies: ['blue', 'teal', 'cyan', 'turquoise'],
    contrastColorFamilies: ['beige', 'gray', 'oatmeal', 'taupe', 'cream'],
    preferredMainNames: ['Evening Haze'],
    preferredContrastNames: ['Cloud Merino'],
    preferredMainColorNames: ['Stone Blue'],
    preferredContrastColorNames: ['Oatmeal Ivory'],
    description: 'A cozy blue-gray hat with a soft neutral contrast.',
    reason:
      'Stone Blue keeps the cool blue main-color feeling, while Oatmeal Ivory gives a soft neutral contrast similar to the reference image.',
    imageUrl: createPatternCardImageDataUrl('Blue-Gray Hat', '#6f8fb1', '#ded3bf'),
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=blue-gray%20hat',
    featuredPairBonus: 40,
  },
  {
    id: 'coastal-brioche-beanie',
    name: 'Coastal Brioche Beanie',
    designer: 'Rowan & Finch',
    type: 'Hat',
    needleMm: 5,
    yardageTarget: 170,
    mainColorFamilies: ['blue', 'teal', 'cyan', 'turquoise'],
    contrastColorFamilies: ['beige', 'gray', 'oatmeal', 'taupe', 'cream'],
    preferredMainNames: ['Evening Haze', 'Heather Fern'],
    preferredContrastNames: ['Cloud Merino'],
    description: 'Soft coastal stripes with a warm neutral base for texture-heavy knitting.',
    reason: 'A cool main color and a pale contrast keep the brioche texture crisp without feeling busy.',
    imageUrl: createPatternCardImageDataUrl('Coastal Brioche Beanie', '#5c8fae', '#e6dccb'),
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=brioche%20beanie',
  },
  {
    id: 'fog-and-fern-hat',
    name: 'Fog and Fern Hat',
    designer: 'The Quiet Loom',
    type: 'Hat',
    needleMm: 5,
    yardageTarget: 160,
    mainColorFamilies: ['blue', 'teal', 'green'],
    contrastColorFamilies: ['beige', 'gray', 'oatmeal', 'taupe', 'cream'],
    preferredMainNames: ['Heather Fern', 'Evening Haze'],
    preferredContrastNames: ['Cloud Merino'],
    description: 'A muted botanical hat that works well as simple colorwork.',
    reason: 'The main yarn leans earthy while the contrast stays light and calm, which keeps the motif readable.',
    imageUrl: createPatternCardImageDataUrl('Fog and Fern Hat', '#78956f', '#ded3bf'),
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=colorwork%20hat',
  },
  {
    id: 'sunset-rib-cowl',
    name: 'Sunset Rib Cowl',
    designer: 'At Home Knits',
    type: 'Cowl',
    needleMm: 5,
    yardageTarget: 220,
    mainColorFamilies: ['orange', 'red', 'yellow'],
    contrastColorFamilies: ['beige', 'gray', 'oatmeal', 'taupe', 'cream'],
    preferredMainNames: ['Honey Tea', 'Rose Linen'],
    preferredContrastNames: ['Cloud Merino'],
    description: 'Warm ribbing with a soft, wearable contrast edge.',
    reason: 'A warm main tone gives depth while the neutral contrast keeps the rib structure clean.',
    imageUrl: createPatternCardImageDataUrl('Sunset Rib Cowl', '#c98c49', '#e8dfd0'),
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=ribbed%20cowl',
  },
  {
    id: 'cocoa-mist-mitts',
    name: 'Cocoa Mist Mitts',
    designer: 'The Cozy Loop',
    type: 'Mitts',
    needleMm: 5,
    yardageTarget: 140,
    mainColorFamilies: ['brown', 'orange'],
    contrastColorFamilies: ['beige', 'gray', 'oatmeal', 'taupe', 'cream'],
    preferredMainNames: ['Cocoa Bloom', 'Honey Tea'],
    preferredContrastNames: ['Cloud Merino', 'Rose Linen'],
    description: 'A cozy small accessory with a plush winter feel.',
    reason: 'The darker main color anchors the mitt while the lighter contrast keeps the cuff visible.',
    imageUrl: createPatternCardImageDataUrl('Cocoa Mist Mitts', '#8a5c42', '#ded3bf'),
    tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=fingerless%20mitts',
  },
];

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

export function recommendColorCombinations(yarnStock, limit = 5) {
  const items = yarnStock
    .map((item, index) => normalizeYarnItem(item, index))
    .filter((item) => item.totalYardage > 0);

  const combinations = [];

  for (let leftIndex = 0; leftIndex < items.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < items.length; rightIndex += 1) {
      const left = items[leftIndex];
      const right = items[rightIndex];
      const forward = scorePair(left, right);
      const reverse = scorePair(right, left);
      const best = reverse.score > forward.score ? reverse : forward;

      if (best.score > 0) {
        combinations.push(best);
      }
    }
  }

  return combinations
    .sort((a, b) => b.score - a.score || b.totalYardage - a.totalYardage)
    .slice(0, limit);
}

export function recommendPatterns(yarnStock, limit = 5, catalog = PATTERN_CATALOG) {
  const sourceYarns = yarnStock.length > 0 ? yarnStock : MOCK_INVENTORY_EXAMPLES;
  const recommendations = catalog.map((pattern) => {
    const previewOptions = getPreviewColorOptions(pattern, sourceYarns);
    const bestOption = previewOptions[0] ?? null;
    return {
      ...pattern,
      bestOption,
      previewOptions,
      score: bestOption?.score ?? 0,
      matchedPairLabel: bestOption
        ? formatPairLabel(bestOption.mainYarn, bestOption.contrastYarn)
        : 'No match yet',
      matchedReason: bestOption?.reason ?? pattern.reason ?? 'Add yarn to personalize this pattern.',
    };
  });

  return recommendations
    .sort((a, b) => {
      if ((b.score ?? 0) !== (a.score ?? 0)) {
        return (b.score ?? 0) - (a.score ?? 0);
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, limit);
}

export function getPreviewColorOptions(pattern, yarns) {
  const sourceYarns = (Array.isArray(yarns) && yarns.length > 0 ? yarns : MOCK_INVENTORY_EXAMPLES)
    .map((item, index) => normalizePreviewYarn(item, index))
    .filter((item) => item.totalYardage > 0);

  const manualOption = findManualPreviewOption(pattern, sourceYarns);
  const candidates = [];

  if (manualOption) {
    candidates.push(manualOption);
  }

  for (let leftIndex = 0; leftIndex < sourceYarns.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < sourceYarns.length; rightIndex += 1) {
      const mainYarn = sourceYarns[leftIndex];
      const contrastYarn = sourceYarns[rightIndex];
      const forward = scorePreviewPair(pattern, mainYarn, contrastYarn);
      const reverse = scorePreviewPair(pattern, contrastYarn, mainYarn);
      candidates.push(forward, reverse);
    }
  }

  return dedupePreviewOptions(candidates)
    .sort((a, b) => b.score - a.score || b.totalYardage - a.totalYardage)
    .slice(0, 3)
    .map((option, index) => ({
      ...option,
      previewImageUrl: option.previewImageUrl ?? createPreviewImageDataUrl(pattern, option, index),
    }));
}

function normalizePreviewYarn(item, index) {
  const quantity = toPositiveInt(item.quantity, 1);
  const yardageEach = toPositiveInt(item.yardage, 0);
  const totalYardage = quantity * yardageEach;
  return {
    id: item.id ?? `preview-${index}`,
    name: String(item.name ?? 'Unnamed yarn'),
    colorName: String(item.colorName ?? '').trim(),
    weight: normalizeWeight(item.weight),
    color: normalizeHexColor(item.color),
    fiber: String(item.fiber ?? '').trim(),
    brand: String(item.brand ?? '').trim(),
    totalYardage,
    supportsFiveMm: supportsNeedleAroundFiveMm(item.weight),
    isFuzzy: hasFuzzyTexture(item),
    colorFamily: classifyPreviewColorFamily(item),
  };
}

function findManualPreviewOption(pattern, sourceYarns) {
  const manual = pattern?.featuredPairBonus && pattern?.preferredMainNames && pattern?.preferredContrastNames
    ? {
        mainNames: pattern.preferredMainNames,
        contrastNames: pattern.preferredContrastNames,
      }
    : null;

  if (!manual) {
    return null;
  }

  const main = sourceYarns.find((item) => matchesAnyLabel(item, pattern.preferredMainNames) || matchesAnyLabel(item, pattern.preferredMainColorNames));
  const contrast = sourceYarns.find((item) => item.id !== main?.id && (matchesAnyLabel(item, pattern.preferredContrastNames) || matchesAnyLabel(item, pattern.preferredContrastColorNames)));

  if (!main || !contrast) {
    return null;
  }

  const option = scorePreviewPair(pattern, main, contrast);
  return {
    ...option,
    score: option.score + pattern.featuredPairBonus,
    reason: pattern.reason ?? option.reason,
  };
}

function scorePreviewPair(pattern, mainYarn, contrastYarn) {
  const mainColorScore = matchesColorFamily(mainYarn.colorFamily, pattern.mainColorFamilies) ? 30 : 0;
  const contrastColorScore = matchesColorFamily(contrastYarn.colorFamily, pattern.contrastColorFamilies) ? 25 : 0;
  const needleScore = mainYarn.supportsFiveMm && contrastYarn.supportsFiveMm ? 20 : 0;
  const fuzzyScore = mainYarn.isFuzzy || contrastYarn.isFuzzy ? 15 : 0;
  const hatScore = mainYarn.totalYardage + contrastYarn.totalYardage >= (pattern.yardageTarget ?? 160) ? 10 : 0;
  const mainLabelScore = matchesAnyLabel(mainYarn, pattern.preferredMainNames) || matchesAnyLabel(mainYarn, pattern.preferredMainColorNames) ? 10 : 0;
  const contrastLabelScore = matchesAnyLabel(contrastYarn, pattern.preferredContrastNames) || matchesAnyLabel(contrastYarn, pattern.preferredContrastColorNames) ? 10 : 0;
  const score = mainColorScore + contrastColorScore + needleScore + fuzzyScore + hatScore + mainLabelScore + contrastLabelScore;
  const useCase = inferPreviewUseCase(pattern, mainYarn, contrastYarn, needleScore, fuzzyScore);
  const reason = buildPreviewWhy(pattern, mainYarn, contrastYarn, {
    mainColorScore,
    contrastColorScore,
    needleScore,
    fuzzyScore,
    hatScore,
    mainLabelScore,
    contrastLabelScore,
  });
  return {
    mainYarn,
    contrastYarn,
    score,
    totalYardage: mainYarn.totalYardage + contrastYarn.totalYardage,
    useCase,
    reason,
    previewGradient: buildPreviewGradient(mainYarn.color, contrastYarn.color),
  };
}

function inferPreviewUseCase(pattern, mainYarn, contrastYarn, needleScore, fuzzyScore) {
  if (pattern.type === 'Hat') {
    if (needleScore > 0 && fuzzyScore > 0) {
      return 'brioche';
    }
    return 'colorwork';
  }
  if (pattern.type === 'Cowl') {
    return 'stripes';
  }
  if (pattern.type === 'Mitts') {
    return 'ribbing';
  }
  if (needleScore > 0 && fuzzyScore > 0) {
    return 'brioche';
  }
  if (matchesColorFamily(mainYarn.colorFamily, ['blue', 'teal', 'cyan', 'turquoise']) && matchesColorFamily(contrastYarn.colorFamily, ['beige', 'gray', 'oatmeal', 'taupe', 'cream'])) {
    return 'colorwork';
  }
  return 'ribbing';
}

function buildPreviewWhy(pattern, mainYarn, contrastYarn, scores) {
  if (pattern.id === 'blue-gray-hat' && mainYarn.name === 'Evening Haze' && contrastYarn.name === 'Cloud Merino') {
    return pattern.reason;
  }

  const reasons = [];
  if (scores.mainColorScore > 0 || scores.mainLabelScore > 0) {
    reasons.push(`main yarn keeps the ${patternMainLabel(pattern)} feeling`);
  }
  if (scores.contrastColorScore > 0 || scores.contrastLabelScore > 0) {
    reasons.push(`contrast yarn softens the edge with a neutral tone`);
  }
  if (scores.needleScore > 0) {
    reasons.push(`both yarns are comfortable around 5.0mm`);
  }
  if (scores.fuzzyScore > 0) {
    reasons.push(`the texture has a cozy fuzzy hand`);
  }
  if (scores.hatScore > 0) {
    reasons.push(`there is enough yardage for a hat or small accessory`);
  }
  if (reasons.length === 0) {
    reasons.push(`the colors still create a balanced contrast`);
  }
  return reasons.join('; ');
}

function patternMainLabel(pattern) {
  if (Array.isArray(pattern.mainColorFamilies) && pattern.mainColorFamilies.includes('blue')) {
    return 'cool blue';
  }
  if (Array.isArray(pattern.mainColorFamilies) && pattern.mainColorFamilies.includes('teal')) {
    return 'coastal teal';
  }
  if (Array.isArray(pattern.mainColorFamilies) && pattern.mainColorFamilies.includes('orange')) {
    return 'warm amber';
  }
  return 'main color';
}

function matchesColorFamily(colorFamily, families = []) {
  if (!Array.isArray(families) || families.length === 0) {
    return false;
  }
  return families.includes(colorFamily);
}

function matchesAnyLabel(item, labels = []) {
  if (!Array.isArray(labels) || labels.length === 0) {
    return false;
  }
  const haystack = normalizeLabel(`${item.name} ${item.colorName} ${item.brand} ${item.fiber}`);
  return labels.some((label) => haystack.includes(normalizeLabel(label)));
}

function classifyPreviewColorFamily(item) {
  const label = normalizeLabel(`${item.name} ${item.colorName}`);
  if (label.includes('oatmeal') || label.includes('ivory') || label.includes('cream') || label.includes('beige')) {
    return label.includes('gray') || label.includes('grey') || label.includes('stone') ? 'gray' : 'oatmeal';
  }
  if (label.includes('taupe')) {
    return 'taupe';
  }
  if (label.includes('gray') || label.includes('grey') || label.includes('mist') || label.includes('fog')) {
    return 'gray';
  }
  return colorToFamily(item.color);
}

function dedupePreviewOptions(options) {
  const seen = new Set();
  const unique = [];

  for (const option of options) {
    const key = `${option.mainYarn.id}:${option.contrastYarn.id}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(option);
  }

  return unique;
}

function createPatternCardImageDataUrl(title, mainColor, contrastColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" role="img" aria-label="${svgEscape(title)}">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f6f0e8"/>
        <stop offset="100%" stop-color="#e3e9ee"/>
      </linearGradient>
      <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${mainColor}"/>
        <stop offset="100%" stop-color="${contrastColor}"/>
      </linearGradient>
    </defs>
    <rect width="640" height="800" rx="34" fill="url(#bg)"/>
    <rect x="40" y="40" width="560" height="720" rx="28" fill="#ffffff" opacity="0.55"/>
    <rect x="84" y="120" width="472" height="440" rx="40" fill="url(#panel)"/>
    <path d="M130 520c70-62 311-62 380 0v86H130z" fill="#ffffff" fill-opacity="0.42"/>
    <circle cx="198" cy="238" r="34" fill="#ffffff" fill-opacity="0.26"/>
    <circle cx="286" cy="198" r="20" fill="#ffffff" fill-opacity="0.18"/>
    <circle cx="412" cy="250" r="28" fill="#ffffff" fill-opacity="0.22"/>
    <text x="320" y="640" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" fill="#24303c">${svgEscape(title)}</text>
    <text x="320" y="688" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#516273">Preview-ready pattern card</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createPreviewImageDataUrl(pattern, option, index) {
  const mainColor = normalizeHexColor(option.mainYarn.color);
  const contrastColor = normalizeHexColor(option.contrastYarn.color);
  const title = svgEscape(pattern.name);
  const mainLabel = svgEscape(option.mainYarn.name);
  const contrastLabel = svgEscape(option.contrastYarn.name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" role="img" aria-label="${title} preview ${index + 1}">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#fbf8f3"/>
        <stop offset="100%" stop-color="#ece5db"/>
      </linearGradient>
      <linearGradient id="main" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${mainColor}"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
      <linearGradient id="contrast" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${contrastColor}"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
    </defs>
    <rect width="640" height="800" rx="32" fill="url(#bg)"/>
    <rect x="54" y="54" width="532" height="692" rx="28" fill="#ffffff" opacity="0.72"/>
    <rect x="96" y="110" width="448" height="460" rx="40" fill="url(#main)"/>
    <path d="M96 470h448v100H96z" fill="url(#contrast)" opacity="0.92"/>
    <path d="M130 180c0 0 55 45 190 45s190-45 190-45v40H130z" fill="#ffffff" fill-opacity="0.22"/>
    <path d="M130 260c0 0 55 34 190 34s190-34 190-34v30H130z" fill="#ffffff" fill-opacity="0.18"/>
    <path d="M130 336c0 0 55 28 190 28s190-28 190-28v28H130z" fill="#ffffff" fill-opacity="0.14"/>
    <text x="320" y="650" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#26313c">${title}</text>
    <text x="320" y="690" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#516273">${mainLabel} + ${contrastLabel}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildPreviewGradient(mainColor, contrastColor) {
  const first = normalizeHexColor(mainColor);
  const second = normalizeHexColor(contrastColor);
  return `linear-gradient(135deg, ${first} 0%, ${second} 100%)`;
}

function formatPairLabel(mainYarn, contrastYarn) {
  const mainLabel = mainYarn.colorName ? `${mainYarn.name} / ${mainYarn.colorName}` : mainYarn.name;
  const contrastLabel = contrastYarn.colorName ? `${contrastYarn.name} / ${contrastYarn.colorName}` : contrastYarn.name;
  return `${mainLabel} + ${contrastLabel}`;
}

function normalizeLabel(value) {
  return String(value ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function svgEscape(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
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

function normalizeYarnItem(item, index) {
  const quantity = toPositiveInt(item.quantity, 1);
  const yardageEach = toPositiveInt(item.yardage, 0);
  const totalYardage = quantity * yardageEach;
  return {
    id: item.id ?? `item-${index}`,
    name: String(item.name ?? 'Unnamed yarn'),
    weight: normalizeWeight(item.weight),
    color: normalizeHexColor(item.color),
    fiber: String(item.fiber ?? '').trim(),
    brand: String(item.brand ?? '').trim(),
    totalYardage,
    supportsFiveMm: supportsNeedleAroundFiveMm(item.weight),
    isFuzzy: hasFuzzyTexture(item),
    colorFamily: classifyComboColorFamily(item.color),
  };
}

function scorePair(main, contrast) {
  const mainColorScore = isMainReferenceColor(main.colorFamily) ? 30 : 0;
  const contrastColorScore = isContrastReferenceColor(contrast.colorFamily) ? 25 : 0;
  const needleScore = main.supportsFiveMm && contrast.supportsFiveMm ? 20 : 0;
  const fuzzyScore = main.isFuzzy || contrast.isFuzzy ? 15 : 0;
  const hatScore = main.totalYardage + contrast.totalYardage >= 160 ? 10 : 0;
  const score = mainColorScore + contrastColorScore + needleScore + fuzzyScore + hatScore;

  return {
    mainYarn: main,
    contrastYarn: contrast,
    score,
    totalYardage: main.totalYardage + contrast.totalYardage,
    useCase: estimateUseCase(main, contrast, needleScore, fuzzyScore),
    why: buildPairWhy(main, contrast, {
      mainColorScore,
      contrastColorScore,
      needleScore,
      fuzzyScore,
      hatScore,
    }),
  };
}

function estimateUseCase(main, contrast, needleScore, fuzzyScore) {
  if (needleScore > 0 && fuzzyScore > 0) {
    return 'brioche';
  }
  if (needleScore > 0 && isMainReferenceColor(main.colorFamily) && isContrastReferenceColor(contrast.colorFamily)) {
    return 'colorwork';
  }
  if (isMainReferenceColor(main.colorFamily) && isContrastReferenceColor(contrast.colorFamily)) {
    return 'stripes';
  }
  return 'ribbing';
}

function buildPairWhy(main, contrast, scores) {
  const reasons = [];
  if (scores.mainColorScore > 0) {
    reasons.push(`main yarn sits in the blue/teal family`);
  }
  if (scores.contrastColorScore > 0) {
    reasons.push(`contrast yarn gives a soft neutral break`);
  }
  if (scores.needleScore > 0) {
    reasons.push(`both yarns suit about 5.0mm needles`);
  }
  if (scores.fuzzyScore > 0) {
    reasons.push(`at least one yarn brings a cozy fuzzy halo`);
  }
  if (scores.hatScore > 0) {
    reasons.push(`together they have enough yardage for a hat`);
  }
  if (reasons.length === 0) {
    reasons.push(`the colors and weights still make a workable pairing`);
  }
  return reasons.join('; ');
}

function classifyComboColorFamily(hexColor) {
  const { h, s, l } = parseColorHsl(hexColor);

  if (s <= 12) {
    return 'gray';
  }
  if (l >= 82 && s <= 45) {
    if (h >= 20 && h < 45) return 'beige';
    if (h >= 45 && h < 70) return 'oatmeal';
    return 'cream';
  }
  if (l >= 68 && s <= 35) {
    if (h >= 20 && h < 45) return 'beige';
    if (h >= 45 && h < 70) return 'oatmeal';
    return 'taupe';
  }
  if (h >= 160 && h < 178) return 'teal';
  if (h >= 178 && h < 195) return 'cyan';
  if (h >= 195 && h < 220) return 'turquoise';
  if (h >= 220 && h < 250) return 'blue';
  if (h >= 250 && h < 290) return 'purple';
  return 'other';
}

function isMainReferenceColor(colorFamily) {
  return ['blue', 'teal', 'cyan', 'turquoise'].includes(colorFamily);
}

function isContrastReferenceColor(colorFamily) {
  return ['beige', 'gray', 'oatmeal', 'taupe', 'cream'].includes(colorFamily);
}

function supportsNeedleAroundFiveMm(weight) {
  const needleRanges = {
    fingering: [2.25, 3.25],
    sport: [3, 3.75],
    dk: [3.5, 4.5],
    worsted: [4.5, 5.5],
    aran: [5, 6],
    bulky: [6.5, 8],
  };
  const range = needleRanges[normalizeWeight(weight)];
  if (!range) {
    return false;
  }
  return range[0] <= 5 && range[1] >= 5;
}

function hasFuzzyTexture(item) {
  const haystack = `${item.fiber ?? ''} ${item.name ?? ''} ${item.brand ?? ''}`.toLowerCase();
  return ['mohair', 'alpaca', 'wool', 'brushed', 'fuzzy', 'halo'].some((keyword) => haystack.includes(keyword));
}

function parseColorHsl(hexColor) {
  const { r, g, b } = parseHexColor(hexColor);
  return rgbToHsl(r, g, b);
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
