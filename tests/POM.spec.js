import {test, expect} from "@playwright/test"
import {LoginPage} from "../pages/loginPage"
import {ProductPage} from "../pages/productPage"
import { CheckoutPage } from "../pages/checkoutPage"

test("Handling Page Object Module" , async ({page})=>{
    const lp = new LoginPage(page)

    await lp.navigate()
    await lp.loginCredentials()

    const pp = new ProductPage(page)

    await pp.printProducts()
    await pp.selectDropDownP()
    await pp.selectProduct()

    const cp = new CheckoutPage(page)

    await cp.selectProduct()
    await cp.checkoutFlow()
    await cp.finalAction()
    await cp.Screeenshort()
})