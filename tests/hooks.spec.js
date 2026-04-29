import {test} from "@playwright/test"
  
test("Handling DemoBlaze" , async ({page})=>{

    // Browser launch

    await page.goto('https://demoblaze.com/')

    //Login Click

    await page.click('[id="login2"]')

    //Credentials 
    await page.locator('[id="loginusername"]').fill('Udhaya23')
    await page.locator('[id="loginpassword"]').fill('Trend@123')

    //Login 
    await page.locator('[onclick="logIn()"]').click()

    //Scenario 1 

    await page.waitForSelector('[class="hrefch"]')

    const prodectList = await page.$$('[class="hrefch"]')
    for (const element of prodectList) {
        const text = await element.textContent()
        console.log(text)
        
    }

    //Scanario 2 
    await page.locator('//a[text()="Sony xperia z5"]').click

    await page.waitForURL('https://demoblaze.com/prod.html?idp_=6')

    //Event 

    page.once("dialog" , async a=>{
        await expect(a.message()).toContain("Product added")
        await a.accept()
    })

    await page.click('text=Add to cart')

    //Scenario 3 
    await page.locator('[id="cartur"]').waitFor({state : 'visible'})

    await page.locator('[id="cartur"]')

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