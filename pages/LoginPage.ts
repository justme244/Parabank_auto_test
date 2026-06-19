import { Page,Locator, } from "@playwright/test";

export class LoginPage {
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly clickButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.usernameInput=page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.clickButton = page.locator("input[value='Log In']")
    }

    async login(username:string,password:string)
    {
        await this.page.goto('/')
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.clickButton.click();
    }
}