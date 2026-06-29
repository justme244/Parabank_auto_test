import {Page,Locator} from "@playwright/test";

export class PaymentPage {
    readonly page:Page;
    readonly payeeName:Locator;
    readonly address:Locator;
    readonly state:Locator;
    readonly zipCode:Locator;
    readonly phone:Locator;
    readonly account:Locator;
    readonly accountvery:Locator;
    readonly amount:Locator;
    readonly accountBank:Locator;
    readonly confirmBtn:Locator;

    constructor(page:Page){
        this.page= page;
        this.payeeName = page.locator('');
        this.address = page.locator('');
        this.state = page.locator('');
        this.zipCode = page.locator('');
        this.phone = page.locator('');
        this.account =page.locator('');
        this.accountvery = page.locator('');
        this.amount = page.locator('');
        this.accountBank  = page.locator('');
        this.confirmBtn = page.locator('')
    }

    async goto(){
        await this.page.goto('');
    }

    async payment(payename:string,address:string,state:string,zipcode:number,phone:number,account:string,amount:number,accountBank:number){
        await this.payeeName.fill(payename);
        await this.address.fill(address);
        await this.state.fill(state);
        await this.zipCode.fill(zipcode.toString());
        await this.phone.fill(phone.toString());
        await this.account.fill(account);
        await this.accountvery.fill(account);
        await this.amount.fill(amount.toString());
        await this.accountBank.fill(accountBank.toString());
        await this.confirmBtn.click();
    }
}