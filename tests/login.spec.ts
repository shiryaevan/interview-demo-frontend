import { expect, test } from "@playwright/test";

test("login error", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.locator("#email").fill("wrong@example.com");
  await page.locator("#password").fill("wrongpassword");
  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});

test("login success", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.locator("#email").fill("demo@demo.com");
  await page.locator("#password").fill("demo");
  await page.getByRole("button", { name: /login/i }).click();

  await expect(
    page.getByRole("heading", { name: /flowers inc\./i }),
  ).toBeVisible();
});

test("redirect unauthenticated user from dashboard to login", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  await expect(page).toHaveURL("http://localhost:5173/login");
});

test("logout redirects to login and clears token", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.locator("#email").fill("demo@demo.com");
  await page.locator("#password").fill("demo");
  await page.getByRole("button", { name: /login/i }).click();

  await expect(
    page.getByRole("heading", { name: /flowers inc\./i }),
  ).toBeVisible();

  await page.locator("header").getByRole("button").click();
  await page.getByRole("menuitem", { name: /log out/i }).click();

  await expect(page).toHaveURL("http://localhost:5173/login");

  const token = await page.evaluate(() => localStorage.getItem("token"));
  expect(token).toBeNull();
});
