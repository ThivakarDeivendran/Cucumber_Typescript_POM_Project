import { expect, Locator, Page } from "@playwright/test";


export class baseMethod{
    public page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async fillMethod(element: Locator, value :string): Promise<void>{
            await element.fill(value);
    }
    async clickMethod(element: Locator): Promise<void>{
            await element.click()
    }
    async urlLaunchMethod(value: string):Promise<void>{
        await this.page.goto(value);
    }
    async textContentMethod(element: Locator): Promise<string>{
        return await element.textContent();
    }
    async expectContainsMethod(element : Locator, expectedValue :string): Promise<void>{
       expect (await this.textContentMethod(element)).toContain(expectedValue)
    }  
}