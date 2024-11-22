import { test } from '@playwright/test';
import { Challenge1Page } from '../pages/Challenge1Page';
import { Challenge2Page } from '../pages/Challenge2Page';
import { Challenge3Page } from '../pages/Challenge3Page';
import { Challenge4Page } from '../pages/Challenge4Page';

test('Login multiple times successfully @c1', async ({ page }) => {
    const challenge1Page = new Challenge1Page(page);
    await challenge1Page.navigateToChallenge();
    for (let i = 1; i <= 3; i++) {
        const email = `test${i}@example.com`;
        const password = `password${i}`;
        await challenge1Page.login(email, password);
        await challenge1Page.verifySuccessMessage(email, password);
    }
});

test('Login animated form and logout successfully @c2', async ({ page }) => {
    const challenge2Page = new Challenge2Page(page);
    await challenge2Page.navigateToChallenge();
    await challenge2Page.login('test1@example.com', 'password1');
    await challenge2Page.logout();
});

test('Forgot password @c3', async ({ page }) => {
    const challenge3Page = new Challenge3Page(page);
    await challenge3Page.navigateToChallenge();
    await challenge3Page.completePasswordReset('test@example.com');
});

test('Login and logout @c4', async ({ page }) => {
    const challenge4Page = new Challenge4Page(page);
    await challenge4Page.navigateToChallenge();
    await challenge4Page.login('test@example.com', 'password');
    await challenge4Page.logout();
});
