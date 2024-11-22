import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CommonLocators, Challenge3Locators } from './locators/ElementLocators';


export class Challenge3Page extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to Challenge 3 page
     */
    async navigateToChallenge() {
        await this.navigate('/');
        await this.clickElement(Challenge3Locators.challenge3Link);
    }

    /**
     * Click on Forgot Password button
     */
    async clickForgotPassword() {
        await this.clickElement(Challenge3Locators.forgotPasswordButton);
    }

    /**
     * Enter email for password reset
     * @param email - Email address for password reset
     */
    async enterResetEmail(email: string) {
        await this.fillInput(CommonLocators.emailInput, email);
    }

    /**
     * Click Reset Password button
     */
    async clickResetPassword() {
        await this.clickElement(Challenge3Locators.resetPasswordButton);
    }

    /**
     * Verify success message for password reset
     */
    async verifyResetSuccess() {
        await expect(this.page.getByRole('heading', { name: 'Success!' })).toBeVisible();
        await expect(this.page.locator(Challenge3Locators.mainContent)).toContainText('Password reset link sent!');
    }

    /**
     * Complete password reset flow
     * @param email - Email address for password reset
     */
    async completePasswordReset(email: string) {
        await this.clickForgotPassword();
        await this.page.waitForSelector(Challenge3Locators.resetPasswordFormTitle);
        await this.enterResetEmail(email);
        await this.clickResetPassword();
        await this.verifyResetSuccess();
    }
}