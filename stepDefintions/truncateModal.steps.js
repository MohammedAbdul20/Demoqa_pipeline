const {Given, Then, When} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const Locators = require("../Locators/truncateModal.locators");
const creds = require("../test-data/credentials.json");
const {truncateModal} = require("../pages/truncateModal");

let largeModaltext;
let largeTextWords;
let BigString;
let SmallString;

Given("I am on the modal site", async function(){
  
    this.TruncateModal = new truncateModal(this.page);
    await this.TruncateModal.goto(creds.Modal_URL);

});

When("I click on the Large Modal", async function(){

    await this.TruncateModal.clickLargeModal();
    console.log("Clicking the modal");

});

When("I get the text from the large Modal", async function(){

    largeModaltext = await this.TruncateModal.getLargeModalText();
    console.log("Got text: ", largeModaltext);

});

When("I split the text into words", async function(){

    largeTextWords = await this.TruncateModal.processText(largeModaltext);
    console.log("got text: ", largeTextWords);

});

When("I convert the words into a string", async function(){

    BigString = await this.TruncateModal.bigString(largeModaltext);
    console.log("Big string: ", BigString);

});

When("I take first 10 words from the string for a new string", async function(){

    SmallString = await this.TruncateModal.smallString(largeTextWords);
    console.log("got samll string: ", SmallString);

});

When("I check if the new string is in the new string", async function(){

    await this.TruncateModal.arrayChecker(BigString, SmallString);

});

Then("I close the modal", async function(){

    await this.TruncateModal.clickClose();
})

