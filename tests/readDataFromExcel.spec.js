//npm i xlsx  

import {test , expect} from "@playwright/test"
 
import xlsx from 'xlsx'
import path from 'path'

const readXl = path.join("testData.js/testData4.xlsx")

const worksheet = workBook.sheets["Sheet1"]

const data = xlsx.utils.sheet_add_json(worksheet)
console.log(data)

for(const dt of data){
    test(`Reading data from excel file ${dt.ID}`, async ({page})=>{

        await page.goto('https://www.saucedemo.com/')

        await page.getByPlaceholder('Username').fill(dt.username)
        await page.getByPlaceholder('Password').fill(dt.password)

        await page.click('[id="login-button"]')

    })
}





    
























































