import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CommonLocators, Challenge4Locators } from './locators/ElementLocators';

export class Challenge4Page extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to Challenge 4 page
     */
    async navigateToChallenge() {
        await this.navigate('/');
        await this.clickElement(Challenge4Locators.challenge4Link);
    }

    /**
     * Wait for app to be in ready state
     * This checks the global variable for app readiness
     */
    async waitForAppReady() {
        await this.page.waitForFunction(() => (window as any).isAppReady === true);
    }

    /**
     * Login with specified credentials
     * @param email - Email to login with
     * @param password - Password to login with
     */
    async login(email: string, password: string) {
        await this.waitForAppReady();
        await this.fillInput(CommonLocators.emailInput, email);
        await this.fillInput(CommonLocators.passwordInput, password);
        await this.clickElement(CommonLocators.submitButton);
    }

    /**
     * Perform logout action
     */
    async logout() {
        await this.clickElement(Challenge4Locators.profileButton);
        await this.clickElement(Challenge4Locators.logoutText);
    }
}