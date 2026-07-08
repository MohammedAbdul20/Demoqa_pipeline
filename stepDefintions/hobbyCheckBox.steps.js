const {Given, When, Then} = require("@cucumber/cucumber");
const creds = require("../test-data/credentials.json");
const {expect} = require("@playwright/test");
const Locators = require("../Locators/hobbyCheckBox.locators");
const {hobbyCheckBox} = require("../pages/hobbyCheckBox");

let labels;
let combined;

Given("I am on the Demo-Site", async function(){

    this.HobbyCheckBox = new hobbyCheckBox(this.page);
    await this.HobbyCheckBox.goto(creds.url);

});

When("the Checkboxes are visible get their labels",async function(){

    labels = await this.HobbyCheckBox.getLabels();
    console.log(labels);

});

When("I click on the first two Checkboxes",async function(){

    await this.HobbyCheckBox.checkFirstTwoHobbies();
    console.log("clciking the checkboxes");

})

When("I combine the labels of the first two Checkboxes", async function(){

    combined = await this.HobbyCheckBox.firstTwolabelsComibined();
    console.log(`combined: ${combined}`);

});

When("I fill required content to submit", async function(){

    await this.HobbyCheckBox.ClicktoSubmit();

});

Then("I check if the combined string is availabel in the modal", async function(){

    // await this.HobbyCheckBox.textConfirm(combined);
    await expect(await this.page.locator(Locators.modal_body).getByText(`${combined}`)).toBeVisible();
    return console.log("Both match");

})