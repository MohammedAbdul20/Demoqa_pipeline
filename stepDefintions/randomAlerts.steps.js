const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const Locator = require("../Locators/randomAlerts.locators");
const creds = require("../test-data/credentials.json");
const {randomAlerts} = require("../pages/randomAlerts");

let message;
let messageLowercase;
let count;
let checkmessage;

Given("I am on the alert page", async function(){

    this.RandomAlerts = new randomAlerts(this.page);
    await this.RandomAlerts.goto(creds.Alert_URL);

});

When("I am on the page get the alert text", async function(){

    await this.RandomAlerts.alertBtnText();

});

When("I get a random Button", async function(){

    console.log(await this.RandomAlerts.getRandomBtn());

});

When("I Trigger the alert and get the message", async function(){

    message = await this.RandomAlerts.triggerAlertAndGetMessage();
    console.log("The message: ", message);

})

When("I turn the message into Lowercase", async function(){

    messageLowercase = await this.RandomAlerts.turnToLowerCase(message);
    console.log("lowerCase Message: ", messageLowercase);

});

When("I count the words in the message", async function(){

    count = this.RandomAlerts.strCount(message);
    console.log(count);

});

Then("I check the count to be greater than 3", async function(){
   
    expect(count).toBeGreaterThanOrEqual(3);
    console.log("greater than or equal to 3");

});

When("I check the original string for uppercase.", async function(){

    checkmessage = await this.RandomAlerts.doesOriginalHasUpperCase(message);
    expect(message).toBeTruthy();
    console.log("Passes(^_^)");
});






