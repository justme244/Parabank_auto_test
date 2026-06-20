import { Expect,test } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";

import register from "../data/register/register.json";


test.describe("register test",()=>{
    test("T_Register_01",async({page})=>{
        const registerPage = new RegisterPage(page);
        await registerPage.goto();

        await registerPage.register(
            register.validUser.firstName,
            register.validUser.lastname,
            register.validUser.address,
            register.validUser.city,
            register.validUser.phone,
            register.validUser.state,
            register.validUser.zip,
            register.validUser.username,
            register.validUser.password,

        )
    })
})