const { test, expect } = require('@playwright/test');

test('Перевірка форми входу', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

test('Валідація обов’язкових полів форми', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#loginButton');
  const error = await page.evaluate(() => document.querySelector(':invalid'));
  expect(error).not.toBeNull();
});

// Тест переходу на info.html
test('Перехід на info.html та перевірка тексту', async ({ page }) => {
  await page.goto('/');
  await page.click('#linkInfo');
  await expect(page).toHaveURL(/info.html/);
  await expect(page.locator('#infoText')).toBeVisible();
});

test('Перевірка наявності заголовка на info.html', async ({ page }) => {
  await page.goto('http://localhost:3000/info.html');
  const header = await page.locator('h1');
  await expect(header).toHaveText(/Інформаційна сторінка/);
});

test('Перевірка посилання повернення на головну', async ({ page }) => {
  await page.goto('http://localhost:3000/info.html');
  await page.click('#backHome');
  await expect(page).toHaveURL('http://localhost:3000/');
});
