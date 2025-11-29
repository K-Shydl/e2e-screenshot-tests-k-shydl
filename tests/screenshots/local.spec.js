const { test, expect } = require('@playwright/test');

test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

test('Порівняння скриншота елемента', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});

test('Скріншот сторінки info.html', async ({ page }) => {
  await page.goto('http://localhost:3000/Info');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/info-page/info-page-full.png');
});

test('Скріншот h1 елемента на info.html', async ({ page }) => {
  await page.goto('http://localhost:3000/Info');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/info-page/info-h1.png');
});
