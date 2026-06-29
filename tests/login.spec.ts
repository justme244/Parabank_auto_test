import { expect,test } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import user from "../data/Login/user.json"


test.describe("Login Test",()=>{
    test("T_LOGIN_01 - User can login with Valid data", async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.login(
            user[0].username,
            user[0].password
        )
        // await page.pause();
        await expect(page).toHaveURL(/overview/i);
    });
});