import {test , expect} from "@playwright/test"

test ("automate website" , async ({page})=>{

    await page.goto('https://sauce-demo.myshopify.com/')

    await page.locator('[id="product-2"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)

    
 

  await page.locator('[id="product-2"]').first().click();
  await page.waitForTimeout(3000)

    


    await page.locator('[id="product-select-option-0"]').selectOption('M')
    await page.locator('[id="product-select-option-1"]').selectOption('Red')
    await page.locator('[id="add"]').click()
    await page.locator('[class="toggle-drawer cart desktop "]').click()
    await page.waitForTimeout(3000)
    
})