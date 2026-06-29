import {Page,Locator} from "@playwright/test";

export class TransferPage{
    readonly page:Page;
    readonly amount:Locator;
    readonly fromAccount:Locator;
    readonly toAccount:Locator;
    readonly transferBtn:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.amount =page.locator("input[id='amount']");
        this.toAccount =page.locator("select[id='toAccountId']")
        this.fromAccount = page.locator("select[id='fromAccountId']")
        this.transferBtn=page.locator("input[@value='Transfer']")
    }

    async goto (){
        await this.page.goto("/transfer.htm")
    }

    async transfer(amount:number,toaccount:string,fromacount:string){
        await this.amount.fill(amount.toString());
        await this.toAccount.selectOption(toaccount);
        await this.fromAccount.selectOption(fromacount);

        await this.transferBtn.click()


    }
}
