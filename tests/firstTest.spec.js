import {test, expect} from "@playwright/test"

test ("validateting Title & url", async function({page}){

    //browser launch
    await page.goto("https://www.demoblaze.com/")


    //Title & url
    const pageTitle = await page.title();
    console.log(pageTitle)

    console.log(await page.url());

    //Assertion 
    await expect(page).toHaveTitle('STORE')

await expect(page).toHaveURL('https://www.demoblaze.com/')

    // signup 

//    await page.locator('[id="signin2"]').click()
//    await page.locator('[id=loginusername]').fill("udhaya23")
//    await page.locator('[id=loginusername]').fill("udhaya23")


// click on login LinkText

  await page.locator('[id="login2"]').click()

  //User Name 

  await page.locator('[id=loginusername]').fill("udhaya23")

  //Pasword

  await page.fill("id=loginpassword", "Trend@123" )

  // Login 
   await expect(page.locator('[onclick="logIn()"]')).toBeVisible()
   await page.locator('[onclick="logIn()"]').click()

   // Hardwait 
   await page.waitForTimeout(5000)

   //Validate dashboard 

   const userName = await page.locator("nameofuser").textContent
   console.log(userName);
   expect(userName).toContain("udhaya23") 

//Multiple WebElements
const productList = await page.$$("//div//h4//a")

for(const element of productList){
    const text = await element.textContent()
    console.log(text)
}


})   