import { expect , Page, Locator } from '@playwright/test';

export class demoAutomationSignInPage{
    private page;
    private usernameTextBox;
    private passwordTextBox;
    private loginButton;
    private errorMessage;

    constructor(page: any){
        this.page = page;
        this.usernameTextBox = page.locator("input[placeholder='E mail']")
        this.passwordTextBox = page.locator("input[placeholder='Password']")
        this.loginButton = page.locator("#enterbtn")
        this.errorMessage = page.locator("#errormsg")
    }

     async userNameMethod(): Promise< Locator>{
        return await this.usernameTextBox
    }
    async passwordMethod(): Promise<Locator> {
        return await this.passwordTextBox
    }
    async loginButtonMethod(): Promise <Locator>{
        return  await this.loginButton
    }
    async errorMessageMethod(): Promise<Locator>{
        return await this.errorMessage
    }
        
}