// @ts-check
import { test, expect } from "@playwright/test";

test("check if nodejs website is accessible", async ({ page }) => {
  await page.goto("https://nodejs.org/en");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Node.js/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://nodejs.org/en");

  // Click the get started link.
  await page.getByRole("link", { name: "Learn", exact: true }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Introduction to Node.js" })
  ).toBeVisible();
});
