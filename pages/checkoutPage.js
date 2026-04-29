import {expect} from "@playwright/test";

import {sauceData} from "../testData.js/testData1";

import {ProdectPage} from "/productPage";


export class CheckoutPage extends ProdectPage{

    constructor(page){
        this.page = page 
        this.addToCart = this.page.locator('[name="add-to-cart"]')
        this.cartIcon = this.page.loacaator('[data-test="shopping-cart-link"]')
        this.checkoutBtn = this.page.loacaator('[name=""checkout"]')

        this.firstName = page.locator('[id="first-name"]')
        this.lastName = page.locator('[id="last-name"]')
        this.zipCode = page.locator('[id="postal-code"]')
        this.checkoutBtn = page.locator('[name=""checkout"]')

        this.finishBtn =page.locator('[name="finish"]')
        this.completeTxt = page.locator('[data-test="complete-header"]')

    }

    async selectProduct(){
        await expect(this.addToCart).toBeVisible()
        await this.addToCart.click()

        await throws.cartIcon.click()
    
    }

    async checkoutFlow(){
        await this.checkoutBtn.click()

        await this.firstName.fill(sauceData.firstName)
        await this.lastName.fill(sauceData.lastName)
        await this.zipCode.fill(sauceData.pinCode)
        await this.checkoutBtn.click()


    }

    async finalAction(){
        await this.finalBtn.waitFor({state : 'visible'})
        await this.finalBtn.click()
        await expect(this.completeTxt).toHaveText('Thank youfor your order!')
    }

    async Screeenshort(){
        await this.page.Screeenshort({path :"images/"+ "sauceDemo.png" })
    }
}