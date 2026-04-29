
import {test, expect} from "@playwright/test"
  
let page

test.beforeAll(async ({browser})=>{

    const context = await browser.newContext() //Incognito Window 
     page = await context.newPage()

     //Browser launch 

     await page.goto("https://demoblaze.com/")

     //Login click 

     
    await page.click('[id="login2"]')

    //Credentials 
    await page.locator('[id="loginusername"]').fill('Udhaya230')
    await page.locator('[id="loginpassword"]').fill('Trend@123')

    //Login btn
    await page.click('[onclick="logIn()"]')
    await page.waitForTimeout(3000)



})


test.afterAll(async ({})=>{
    await page.screenshort({path : "images/" + "demoBlaze.png" })
})

test("Print the Prodects ", async ({})=>{
    await page.waitForSelector('[class="hrefch"]')

    const productList = await page.$$('[class="hrefch"]')
    for (const element of productList) {
        const text = await element.textContent()
        console.log(text)
        
    }
    await page.waitForTimeout(3000)
})

test ("Add to Cart" , async  ({})=>{

    await page.locator('//a[text()="Sony xperia z5"]').click()

   await page.waitForURL('https://demoblaze.com/prod.html?idp_=6') 

   //Event
   page.once("dialog", async a=>{
    await expect(a.message()).toContain("Product added")
    await a.accept()

   })

   await page.click('text=Add to cart')
   await page.waitForTimeout(3000)


})

test("check out", async ({})=>{

    await page.locator('[id="cartur"]').waitFor({state : 'visible'})

    await page.click('[id="cartur"]')
    
    await page.locator('[data-target="#orderModal"]').waitFor()
    await page.click('[data-target="#orderModal"]')

    //Fill details

   await page.fill('[id="name"]', "Udhaya")
    await page.fill('[id="country"]' , "India")
    await page.fill('[id="city"]', 'chennai')
    await page.fill('[id="card"]', '122222')
    await page.fill('[id="month"]', 'July')
    await page.fill('[id="year"]', '2027')

    await page.click('[onclick="purchaseOrder()"]')


})