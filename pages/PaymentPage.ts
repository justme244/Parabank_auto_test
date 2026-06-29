import {Page,Locator} from "@playwright/test";

export class PaymentPage {
    readonly page:Page;
    readonly payeeName:Locator;
    readonly address:Locator;
    readonly state:Locator;
    readonly zipCode:Locator 
}