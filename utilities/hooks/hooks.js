const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000);
Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();

    //console.log("✅ Page initialized:", this.page !== undefined);
});

After(async function () {
    await this.browser.close();
});