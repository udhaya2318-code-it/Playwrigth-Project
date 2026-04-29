
import {test ,chromium , firefox , webkit } from "@playwright/test"

test("Handling Window" , async({})=>{

    const browser = await chromium.launch({slowMo : 1500, channel: "chrome", headless: false})// browser
    const context = await browser.newContext({permission : ['geolocation' , 'camera']}) //Window
    const page1 = await context.newPage() // tab

    // const  page 2 = await context.newpage()
  
    //Launch
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Click on Link 

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page1.click('text=OrangeHRM, Inc')
    ])
   await page1.waitForTimeout(3000)

   
   // await page1.click('text=OrangeHRM, Inc')
   // const newPage = await context.waitForEvent('page') 

   await newPage.locator('[name="EmailHomePage"]').fill('udhay@gmail.com')
   await newPage.click('[onclick="buttonClick()"]')

   await newpage.reload()
   await newPage.goBack()

   await page1.bringToFront()

   await page1.getByPlaceholder('username').fill('Admin')
   await page1.getByPlaceholder('Password').fill('admin123')  
   await page1.getByRole('button', {name : " Login"}).click()
})















 


























