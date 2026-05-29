import test from 'node:test';
import assert from 'node:assert/strict';

import { getYarnSummary, recommendProjects } from '../src/recommender.js';

test('getYarnSummary aggregates totals and yardage by weight', () => {
  const summary = getYarnSummary([
    { weight: 'DK', yardage: 220, quantity: 2, color: '#2f6ad2' },
    { weight: 'worsted', yardage: 180, quantity: 1, color: '#d15353' },
  ]);

  assert.equal(summary.totalSkeins, 3);
  assert.equal(summary.totalYardage, 620);
  assert.equal(summary.byWeight.dk, 440);
  assert.equal(summary.byWeight.worsted, 180);
  assert.equal(summary.byColorFamily.blue, 440);
  assert.equal(summary.byColorFamily.red, 180);
});

test('recommendProjects prioritizes feasible projects first', () => {
  const yarn = [
    { weight: 'worsted', yardage: 220, quantity: 3 },
    { weight: 'dk', yardage: 200, quantity: 1 },
  ];

  const [first] = recommendProjects(yarn, [
    {
      name: 'Small Hat',
      minYardage: 200,
      weights: ['worsted'],
      difficulty: 'Beginner',
      description: '',
    },
    {
      name: 'Big Sweater',
      minYardage: 1600,
      weights: ['worsted'],
      difficulty: 'Advanced',
      description: '',
    },
  ]);

  assert.equal(first.name, 'Small Hat');
  assert.equal(first.feasible, true);
});

test('recommendProjects reports missing yardage when not feasible', () => {
  const [project] = recommendProjects(
    [{ weight: 'fingering', yardage: 100, quantity: 2, color: '#53c1d1' }],
    [
      {
        name: 'Sock Set',
        minYardage: 300,
        weights: ['fingering'],
        difficulty: 'Intermediate',
        description: '',
      },
    ],
  );

  assert.equal(project.feasible, false);
  assert.equal(project.missingYardage, 100);
});

test('recommendProjects prefers better color fit when weight fit is equal', () => {
  const yarn = [{ weight: 'dk', yardage: 200, quantity: 2, color: '#3154c8' }];
  const [first] = recommendProjects(yarn, [
    {
      name: 'Blue Cowl',
      minYardage: 200,
      weights: ['dk'],
      preferredColors: ['blue'],
      difficulty: 'Beginner',
      description: '',
    },
    {
      name: 'Sunny Cowl',
      minYardage: 200,
      weights: ['dk'],
      preferredColors: ['yellow'],
      difficulty: 'Beginner',
      description: '',
    },
  ]);

  assert.equal(first.name, 'Blue Cowl');
  assert.equal(Math.round(first.colorMatchScore * 100), 100);
});

test('recommendProjects prefers stronger weight match when yardage and color are similar', () => {
  const yarn = [
    { weight: 'dk', yardage: 400, quantity: 1, color: '#3154c8' },
    { weight: 'bulky', yardage: 400, quantity: 1, color: '#3154c8' },
  ];

  const [first] = recommendProjects(yarn, [
    {
      name: 'DK Wrap',
      minYardage: 300,
      weights: ['dk'],
      preferredColors: ['blue'],
      difficulty: 'Beginner',
      description: '',
    },
    {
      name: 'Any Wrap',
      minYardage: 300,
      weights: ['any'],
      preferredColors: ['blue'],
      difficulty: 'Beginner',
      description: '',
    },
  ]);

  assert.equal(first.name, 'DK Wrap');
  assert.ok(first.weightMatchScore > 0);
});

test('recommendProjects applies brand score in ranking', () => {
  const yarn = [
    { weight: 'dk', yardage: 300, quantity: 1, color: '#3154c8', brand: 'Malabrigo' },
  ];

  const [first] = recommendProjects(yarn, [
    {
      name: 'Brand Match Cowl',
      minYardage: 250,
      weights: ['dk'],
      preferredBrands: ['malabrigo'],
      preferredColors: ['blue'],
      difficulty: 'Beginner',
      description: '',
    },
    {
      name: 'Brand Miss Cowl',
      minYardage: 250,
      weights: ['dk'],
      preferredBrands: ['cascade'],
      preferredColors: ['blue'],
      difficulty: 'Beginner',
      description: '',
    },
  ]);

  assert.equal(first.name, 'Brand Match Cowl');
  assert.equal(Math.round(first.brandMatchScore * 100), 100);
});

test('recommendProjects uses best single matching weight instead of mixing weights', () => {
  const [project] = recommendProjects(
    [
      { weight: 'dk', yardage: 700, quantity: 1, color: '#3154c8', brand: 'drops' },
      { weight: 'worsted', yardage: 700, quantity: 1, color: '#3154c8', brand: 'drops' },
    ],
    [
      {
        name: 'Pullover Test',
        minYardage: 1200,
        weights: ['dk', 'worsted'],
        preferredBrands: ['drops'],
        preferredColors: ['blue'],
        difficulty: 'Advanced',
        description: '',
      },
    ],
  );

  assert.equal(project.usableYardage, 700);
  assert.equal(project.selectedWeight, 'dk');
  assert.equal(project.feasible, false);
});

test('recommendProjects only returns projects with matching stock weight yardage', () => {
  const results = recommendProjects(
    [{ weight: 'dk', yardage: 300, quantity: 1, color: '#3154c8' }],
    [
      {
        name: 'DK Hat',
        minYardage: 100,
        weights: ['dk'],
        preferredBrands: ['any'],
        preferredColors: ['blue'],
        difficulty: 'Beginner',
        description: '',
        tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=dk%20hat',
      },
      {
        name: 'Bulky Hat',
        minYardage: 100,
        weights: ['bulky'],
        preferredBrands: ['any'],
        preferredColors: ['blue'],
        difficulty: 'Beginner',
        description: '',
        tutorialUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=bulky%20hat',
      },
    ],
  );

  assert.equal(results.length, 1);
  assert.equal(results[0].name, 'DK Hat');
  assert.match(results[0].matchedTutorialUrl, /weight=dk/);
  assert.equal(results[0].matchedColorHex, '#3154c8');
});
