import {test , expect  } from "@playwright/test"

test("Handling Radio Buttons" , async function({page}){

    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('[id="female"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Assert 
    await expect(page.locator('[id="female"]')).toBeVisible()

    //Appraoch -1 
    await page.locator('[id="female"]').check()

    //Assert
    await expect(page.locator('[id="female"]')).toBeChecked()
    await page.waitForTimeout(3000)

    //Approach - 2
    await page.locator('//label[text()="Male"]').click()

    //Assert
    await expect(await page.locator('//label[text()="Male"').isChecked()).toBeTruthy()
    await page.waitForTimeout(3000)
})

test ("Handling check Boxes" , async({page})=>{

    //Browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll 
    await page.locator('[id="sunday"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Assert 
    await page.locator('[id="sunday"]').click()

    //Assert 

    await expect(page.locator('[id="sunday"]')).toBeChecked()
    await page.waitForTimeout(3000)

    //multiple checkboxes
    const checkBoxes = await page.$$('//input[@class="form-check-input" and @type="checkbox"]//following-sibling::label')

    for (const element of checkBoxes) {

        const text = await element.textContent()

        if(text =="Tuesday"|| text =="Thursday"|| text =="Saturday"){
           await element.check()
           await page.waitForTimeout(3000)


        }
        
    }

    // Appraoch for uncheck check boxes 

    const multipleCheck = [
        page.locator('[id="tuesday]'), page.locator('#thursday') , 
        page.locator('id=saturday')

    ]
    for (const element of multipleCheck) {
        await element.uncheck
        await page.waitForTimeout(1500)
    }

})























































