
import {test , expect} from "@playwright/test"

test("Handling Built In locators", async ({page})=>{
    
    //browesr launch 

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


     //Alt
     const orangeLogo = await page.getByAltText('Company-brand')   
     await expect(orangeLogo).toBeVisible 

     //Placeholder

     await page.getByPlaceholder('Username').fill('Admin')
     await page.getByPlaceholder('Password').fill('admin123')

     await page.waitForTimeout(2000)

    // Role 
    await page.getbyRole('button', {name: "Login"}).waitFor({state :' visible'})
    await page.getbyRole('button', {name: "Login"}).click()
    
    await page.waitForTimeout(2000)
    //Text 
    const userName = await page.locator('[class="oxd-userdropdown-name"]').textConstent()
    console.log(userName)
    await expect(page.getByText(userName)).toBevisible()

    //Label
    await expect(page.getByLable('sidepanel')).tobeVisible()

    //Title
    await page.getByTitle("help").click

    //Test ID
    //playwright.dev


    //Xpath operator 

    //make my trip website as a example xpath practice 
    // //p[text()="Grab Up to 40% OFF* on  "]//parent::div//following::div[@class="sliderFoot"]//child::div[@class="makeFlex hrtlCenter spaceBetween flexOne"]//following-sibling::a[@data-cy="superOfferCtaText1"]



})