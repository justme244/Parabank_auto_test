import { Page,Locator, } from "@playwright/test";

export class RegisterPage {
    readonly page:Page;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator;
    readonly addressInput:Locator;
    readonly cityInput:Locator;
    readonly stateInput:Locator;
    readonly zipcodeInput:Locator;
    readonly phoneInput:Locator;
    readonly SsnInput:Locator;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly confirmInput:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.locator("input[id='customer.firstName']");
        this.lastNameInput = page.locator();
        this.addressInput = page.locator();
        this.
    }
}