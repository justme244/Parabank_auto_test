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
    readonly ssnInput:Locator;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly confirmInput:Locator;
    readonly buttonConfirm:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstNameInput = page.locator("input[id='customer.firstName']");
        this.lastNameInput = page.locator("input[id='customer.lastName']");
        this.addressInput = page.locator("input[id='customer.address.street']");
        this.cityInput =page.locator("input[id='customer.address.city']");
        this.zipcodeInput = page.locator("input[id='customer.address.zipCode']");
        this.stateInput = page.locator("input[id='customer.address.state']");
        this.ssnInput = page.locator("input[id='customer.ssn']");
        this.phoneInput = page.locator("input[id='customer.phoneNumber']");
        this.usernameInput = page.locator("input[id='customer.username']");
        this.passwordInput = page.locator("input[id='customer.password']");
        this.confirmInput = page.locator("input[id='repeatedPassword']");
        this.buttonConfirm = page.locator("input[value='Register']")
    }

    async goto(){
        await this.page.goto('/register')
    }

    async register(firstname:string,
                lastName:string,
                address:string,
                city:string,
                phone:string,
                state:string,
                zip:string,
                username:string,
                password:string,
    )
        {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.phoneInput.fill(phone);
        await this.stateInput.fill(state);
        await this.zipcodeInput.fill(zip);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.confirmInput.fill(password);

        await this.buttonConfirm.click()
    }
}