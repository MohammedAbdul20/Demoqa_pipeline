const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const Locator = require("../Locators/radioButtons.locators");
const creds = require("../test-data/credentials.json");
const {radioButtons} = require("../pages/radioButtons");

let labels;
let processedlabels;

Given("I am on the page", async function(){

    this.RadioButtons = new radioButtons(this.page);
    await this.RadioButtons.goto(creds.url);

});

When("the radio buttons appear extarct store into a list", async function(){

    labels = await this.RadioButtons.getLabels();
    console.log("labels: ", labels);

})

When("I porcess the labels to be in uppercase, no spaces store into another variable.", async function(){

    processedlabels = this.RadioButtons.processLabels(labels);
    console.log("processed labels: ", processedlabels);

})

When("check if the words in array are >=4, in uppercase", async function(){
    
    console.log("Checking the labels...");
    await this.RadioButtons.arrayCheck(processedlabels);

})

Then("I compare the length of the new list and the old list", async function(){

    expect(labels.length).toBe(processedlabels.length);
    console.log("The lengths are equal, Test Passes(^-^)");

})