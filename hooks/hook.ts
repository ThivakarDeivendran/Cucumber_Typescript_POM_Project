import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';

let browser :Browser;
let page : Page;

BeforeAll(async function() {
        browser =  await chromium.launch({headless:false})
        page = await browser.newPage();
})
export { browser, page };

AfterAll(async function(){
        await page.close();
        await browser.close();
})



