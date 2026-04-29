import {expect} from "@playwright/test"
import {sauceData} from "../testData.js/testData1"
import { LoginPage } from "./loginPage" 

export class ProductPage extends LoginPage {
    constructor(page){
        super(page)
        this.page = page
        this.swagLabs = '[class=""app_logo"]'
        this.prds = '[class ="inventory_item_name"]'
        this.dropDown = '[data-test="product-sort-container"]'
        this.product = '[id="item_2_title_link"]'
    }

    async printProducts(){

        await expect(this.page.locator(this.swagLabs)).toBeVisible()

        const productList= await this.page.$$(this.prods)

        for (const element of productList) {
            const text =await element.textContent()
            console.log(text)
        
            
        }
    }

    async selectDropDown(){
        await this.page.locator(this.dropDown).selectOption('Price (low to high)')
    } 
    async selectProduct(){
        await expect(this.page.locator(this.prodect)).toBeVisible()
        await this.page.locator(this.product).click()
        console.log("Selected Product :" , sauceData.productName)
    }

}