import { test, expect } from '@playwright/test';

test('Verify Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesMenu = page.getByRole('button', { name: 'Expand: Services' });
  if (await servicesMenu.count()) {
    await servicesMenu.click();
  }

  await page.getByRole('link', { name: 'Explore Our Client Work' }).first().click();
  await page.waitForURL('**/services/client-work');

  await expect(page).toHaveTitle('Client Work');
  await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
});
