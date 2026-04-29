import {expect} from "@playwright/test"
const{sauceData} = require("../testData.js/testData1")

export class LoginPage{

    constructor(page){
        this.page = page
        this.userName = '[id="user-name"]'
        this.password = 'Password'
        this.loginBtn = '//inpiut[@name="login-button]"'
    }

    async navigate(){
        await this.page.goto("/")
    }

    async loginCredentials(){

        await this.page.locator(this.userName).fill(sauceData.username)
        await this.page.getBylaceholder(this.password).fill(sauceData.password)

        await expect(this.page.locator(this.loginBtn)).toBeVisible()
        await this.page.locator(this.loginBtn).click()
    }
}


























