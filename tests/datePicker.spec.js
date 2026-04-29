import {test , expect} from "@playwright/test"
import { selectDate } from "../utility/pickDate"

test('Handeling Date Picker' , async ({page})=>{
    //browser launch 
    await page.goto("https://testautomationpractice.blogspot.com/")

    


    //scroll 
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)    

    //Click on DatePicker

    await page.locator('[id="datepicker"]').click
    await page.waitForTimeout(2000)

    //choose Day, Month, Year
    //let selectedDate = "15"
    //let selectedMonth = "August"
    //let selectedYear = "2028"

    let{date, month, year } = selected(5)

    while(true){
        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const currentYear = await page.locator('[class="ui-datepicker-year"]').innerText()

        if(currentMonth === month && currentYear === year.toString()){
            break
        }

        //await page.click('//span[text()="prev"]')
        await page.click('//span[text()="prev"]')
    }

    await page.waitForTimeout(4000)

    await page.click(`//a[@class="ui-state-default" and text()="${data}"]`)
    await page.waitForTimeout(4000)
})
  