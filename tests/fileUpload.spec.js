import {test , expect} from "@playwright/test"

test('Handeling Single File' , async ({page})=>{
    //browser launch 
    await page.goto("https://testautomationpractice.blogspot.com/")

    


    //scroll 
    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)   
    
    //Single File 
    await page.locator('[id="singleFileInput"]')
    .setInputFiles('C:/Users/hp/OneDrive/Desktop/New folder/Resume/Optum.pdf')
     await page.waitForTimeout(3000)  
     
     //Multiple Files

     await page.locator('[id="multipleFilesForm"]')
     .setInputFiles([''])
     await page.waitForTimeout(3000)  




})