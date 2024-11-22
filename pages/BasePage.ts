import {expect,Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    /**
     * Navigate to the specified URL
     * @param url - The URL to navigate to
     */
    async navigate(url: string) {
        await this.page.goto(url);
    }

    /**
     * Wait for element to be visible and click
     * @param selector - Element selector
     */
    async clickElement(selector: string) {
        //await this.page.pause();
        await this.page.locator(selector).waitFor({ state: 'visible' });
        await this.page.locator(selector).click();
    }

    /**
     * Fill input field with text
     * @param selector - Element selector
     * @param text - Text to input
     */
    async fillInput(selector: string, text: string) {
        const input = this.page.locator(selector);
        await input.waitFor({ state: 'visible' });
        await expect(input).toBeEmpty();
        await input.click();
        await input.fill(text);
    }
}