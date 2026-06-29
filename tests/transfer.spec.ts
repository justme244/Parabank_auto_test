import { expect,test } from "@playwright/test";
import { TransferPage } from "../pages/TransferPage";
import { LoginPage } from "../pages/LoginPage";
import user from "../data/Login/user.json"
test.describe("transferPageTest",()=>{
    test("T_Transfer_transferSuccess",async ({page})=>{
        const transferPage = new TransferPage(page);
        await transferPage.goto();
        await transferPage.transfer(900,"156","160")
    })
})
