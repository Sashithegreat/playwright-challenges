import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CommonLocators, Challenge2Locators } from './locators/ElementLocators';

export class Challenge2Page extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to Challenge 2 page
     */
    async navigateToChallenge() {
        await this.navigate('/');
        await this.clickElement(Challenge2Locators.challenge2Link);
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
     * Perform logout action
     */
    async logout() {
        await expect(this.page.locator(Challenge2Locators.menuButton)).toHaveAttribute('data-initialized', 'true');
        await this.clickElement(Challenge2Locators.menuButton);
        await this.clickElement(Challenge2Locators.logoutOption);
    }

}