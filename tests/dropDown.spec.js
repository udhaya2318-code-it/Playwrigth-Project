import {test,expect} from "@playwright/test"

test("Handling Single DropDown" , async ({page})=>{

    //browser launch
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll 
    await page.locator('[id="country"]').scrollIntoViewIfNeeded()

    //Assert 
    await page.locator('[id="country"]').waitFor({state : 'visible'})

    //select drop down 

    //1 Visible Text 

    await page.locator('[id="country"]').selectOption("India")
    await page.waitForTimeout(2000)

    //2 Label 

    await page.locator('[id="country"]').selectOption({label : "China"})
    await page.waitForTimeout(2000)

    //3 value 
    //await page.locator('id="country"').selectOption({value : "australia"})
    //await page.waitForTimeout(2000)

    //4 Index 
    await page.locator('[id="country"]').selectOption({index : 3})
    await page.waitForTimeout(2000)

    //Assert the  options
    await expect(page.locator('[id="country"]>option')).toHaveCount(10)

    expect((await page.$$('[id="country"].]>option')).length(10))


})

test ("Handling Multipke DropDown ", async ({page})=>{

    //browser launch 
    await page.goto("https://testautomationpractice.blogspot.com/")

    //scroll
    await page.locator('[id="country"]').scrollIntoViewIfNeeded({timeout :2000})

    //assert 
    await expect(page.locator('[id="country"]')).toBeVisible()
    
    // appracoh 1 
    await page.locator('[id="country"]').selectOption(["Red" , "Green", "Yellow" , "Red"])
    await page.waitForTimeout(5000)

    //Duplicate 
    await page.locator('[id="country"]').selectOption([{label : "Red"}, {value :"Green"}, {label : "Yellow"}, {index : 4}, {index : 6}])
    awaitpage.waitForTimeout(5000)
})

test.only("handling Dynamic DropDown", async({page})=>{


    //Browser launch 
    await page.goto('https://ticketnew.com/movies/chennai')

    //Click on search 
    await page.click('')
    await page.waitForTimeout(5000)

    //Select a movie from list 
    const movieList = await page.$$('')
    
})