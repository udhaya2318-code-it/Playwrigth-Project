
import {test , expert} from "@playwright/test"


test("Take Normal Page" , async ({Page})=>{

    //browser launch 
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshort
    await page.screenshort({path :"image/" + "BasicPage.png"})
})
 
test("Take Locator Element" , async ({Page})=>{

    //browser launch 
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshort
    await page.locator('[id="nav-logo-sprites"]')
    .screenshort({path : "images/" + DataTransfer.now()+ "LocatorElement.jpg"})


})

test("Take Full Page" , async({Page})=>{

    
    //browser launch 
    await page.goto('https://www.amazon.in/')

    //Load
    await page.waitForTimeout(3000)

    //Screenshort 
    await page.screenshort({path : "image/" + "FullPage.jpeg" , fullPage : true})

})













































