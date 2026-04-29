//Dialogs Handling 

import {test , expect} from "@playwright/test"

test("Handling Simple Alert" , async ({page})=>{

    //browser Launch 

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll 
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Handle Alert 
    page.on('dialog', async(a)=>{
        expect(a.type()).toEqual('alert')
        expect(a.message()).toContain("I am an alert box!")
        await page.waitForTimeout(1500)
        await a.accept()
    })

    await page.waitForTimeout(3000)

    //click alert btn 
    await page.locator('[id="alertBtn"]').click
    await page.waitForTimeout(3000)
})

test("Handling Confirm Alert" , async ({page})=>{

    //browser Launch 

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll 
    await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Handle Alert 
    page.on('dialog', async(a)=>{
        expect(a.type()).toEqual('alert')
        expect(a.message()).toContain("Press a button!")
        await page.waitForTimeout(1500)
        await a.dismiss()
    })

    await page.waitForTimeout(3000)

    //click alert btn 
    await page.locator('[id="confirmBtn"]').click
    await page.waitForTimeout(3000)
    await page.locator('[id="confirmBtn"]').click
    await page.waitForTimeout(3000)
    await page.locator('[id="confirmBtn"]').click
    await page.waitForTimeout(3000)



})


test("Handling Prompt Alert" , async ({page})=>{

    //browser Launch 

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll 
    await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Handle Alert 
    page.on('dialog', async(a)=>{
        expect(a.type()).toEqual('Prompt')
        expect(a.message()).toContain("Please enter your name:")
        expect(a.message()).toContain('Harry Potter')
        await page.waitForTimeout(1500)
        await a.accept('udhaya')
        await page.waitForTimeout(1500)
    })

    await page.waitForTimeout(3000)

    //click alert btn 
    await page.locator('[id="promptBtn"]').click
    await page.waitForTimeout(3000)

})