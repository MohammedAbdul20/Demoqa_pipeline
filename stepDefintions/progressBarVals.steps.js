const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} =  require("@playwright/test");
const creds = require("../test-data/credentials.json");
const {progressBarVals} = require("../pages/progressBarVals");

let percentage;
let processedList;
let FilteredList;

Given("I am on the ProgressBar site", async function(){

    this.ProgressBarVals = new progressBarVals(this.page);
    await this.ProgressBarVals.goto(creds.Progress_bar);

});

When("I start the progressBar random values get captured", async function(){

    percentage = await this.ProgressBarVals.captureProgressValues();
    console.log("percentage: ", percentage);

});

When("I remove percentage token convert to number", async function(){

    processedList = await this.ProgressBarVals.ProcessList(percentage);
    console.log("processed List: ", processedList);

});

When("I filter the values >= 50", async function(){

    FilteredList = await this.ProgressBarVals.filteredArray(processedList);
    console.log("filter vals: ",FilteredList);

});

When("I get the length of the original list", async function(){
    this.OgPercentageCount = await this.ProgressBarVals.NewListCount(percentage);
    console.log("og count: ", this.OgPercentageCount);
});

When("I get the length of filtered list", async function(){
    this.filterCount = await this.ProgressBarVals.NewListCount(FilteredList);
    console.log("new count: ", this.filterCount);
});

Then("I check if the length of filtered list is less than or equal to original list", async function(){
    expect(this.filterCount).toBeLessThanOrEqual(this.OgPercentageCount);
    console.log("test passes(^-^)");
});
