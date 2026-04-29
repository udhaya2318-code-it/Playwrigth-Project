
import {Test} from "@playwright/test"

test("Test ", {tag :"@smoke"}, async({})=>{
    console.log('SMOKE')
})

test("Test2 @sanity", async({})=>{
    console.log("SANITY")
})

test("Test3 @reg", async({})=>{
    console.log('REG')
})

test("Test4 @smoke@sanity", async({})=>{
    console.log('SMOKE With SANITY')
})
test("Test5 @smoke@reg", async({})=>{
    console.log('SMOKE with REG')

})

/**
 * npx playwright test --grep "@smoke" // WHERE and ALL SMOKR AVAILABLE
 * npx playwright test --grep "@smoke" --grep-invert "@sanity" //SMOKE AND REG
 * npx playwright test --grep "@smoke" --grep-invert "@sanity|@reg" //Only SOKE
 * npx playwright test --grep "@smoke" --grep-invert "@sanity&@reg" //Smoke,SANITY,REG
 */