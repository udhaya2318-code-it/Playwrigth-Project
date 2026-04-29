
import {test , expect} from "@playwright/test"

test("handling Web Table" , async ({page})=>{

    //Browser Launch 
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll 
    await page.locator('[id="productTable"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Table Columns
    const tableColumn = await page.$$('[id="productTable"] thead tr th')
    console.log(tableColumns.length)

    //Table Rows
    const tableRows = await page.locator('[id="prodectTable"]tbody>tr')
    console.log(await  tableRows.count())

    //1 select a prodect 

    const selectedProd = await tableRows.filter({
        has : page.locator('td'), 
        hasText : "Tablet" , 

    })

    await selectedProd.locator('input').click
    await page.waitForTimeout(3000)

    //2 Select Multiple Prodects 

    async function multiProd(prodName){

        const selectedProd = await tableRows.filter({
        has : page.locator('td'), 
        hasText : prodName , 

    })

    await selectedProd.locator('input').click()

    // 3 Print prodect from page1 

    for (let i=0; i< await tableRows.count(); i++){
        const tds = await tableRows.nth(i).locator('td')
        // console.log(await tds.allInnerTexts())

        for(let j=0; j< await tds.count(); j++){
            const text = await tds.nth(j).text
        }
    }

    }
})






































