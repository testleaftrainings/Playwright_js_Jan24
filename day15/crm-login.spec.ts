import { test } from "@playwright/test";
import { LoginPage } from "../pages/login";

test(`Login to dynamics 365`, async ({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.loadApp("");
    await loginPage.doLogin("radhakrishnan.rangarajan@playwrightins.onmicrosoft.com", "Signature@123")

})