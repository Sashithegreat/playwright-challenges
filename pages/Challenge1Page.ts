import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CommonLocators, Challenge1Locators } from './locators/ElementLocators';

export class Challenge1Page extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to Challenge 1 page
     */
    async navigateToChallenge() {
        await this.navigate('/');
        await this.clickElement(Challenge1Locators.challenge1Link);
    }

    /**
     * Login with specified credentials
     * @param email - Email to login with
     * @param password - Password to login with
     */
    async login(email: string, password: string) {
        await this.fillInput(CommonLocators.emailInput, email);
        await this.fillInput(CommonLocators.passwordInput, password);
        await this.clickElement(CommonLocators.submitButton);
    }

    /**
     * Verify success message contains expected text
     * @param email - Expected email in success message
     * @param password - Expected password in success message
     */
    async verifySuccessMessage(email: string, password: string) {
        await expect(this.page.locator(Challenge1Locators.successMessage)).toContainText('Successfully submitted!');
        await expect(this.page.locator(Challenge1Locators.successMessage)).toContainText(`Email: ${email}`);
        await expect(this.page.locator(Challenge1Locators.successMessage)).toContainText(`Password: ${password}`);

    }
}