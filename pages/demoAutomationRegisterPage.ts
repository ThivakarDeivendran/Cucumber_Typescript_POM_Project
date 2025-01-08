import { expect , Page, Locator } from '@playwright/test';

export class demoAutomationRegisterPage{
    private page;
    private firstNameTextBox;
    private lastNameTextBox;
    private addressTextBox;
    private emailAddressTextBox;
    private phoneNumberTextBox;

    constructor(page: any){
        this.firstNameTextBox = page.locator("input[placeholder='First Name']")
        this.lastNameTextBox = page.locator("input[placeholder='Last Name']")
        this.addressTextBox = page.locator("//label[text()='Address']/following-sibling::div/textarea")
        this.emailAddressTextBox = page.locator("//label[contains(text(),'Email add')]/following-sibling::div/input")
        this.phoneNumberTextBox = page.locator("input[type='tel']")
    }
    async firstNameMethod(): Promise<Locator>{
        return await this.firstNameTextBox;
    }
    async lastNameMethod(): Promise<Locator>{
        return await this.lastNameTextBox;
    }
    async addressMethod(): Promise<Locator>{
        return await this.addressTextBox;
    }
    async emailAddressMethod(): Promise<Locator>{
        return await this.emailAddressTextBox;
    }
    async phoneNumberMethod(): Promise<Locator>{
        return await this.phoneNumberTextBox;
    }
}