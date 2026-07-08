const Locators = require("../Locators/dropDownDatePicker.locators");
const creds = require("../test-data/credentials.json");
const {expect} = require("@playwright/test");
const {dropDownDatePicker} = require("../pages/dropDownDatePicker");
const { Given, When, Then } = require("@cucumber/cucumber");

let yearsList;
let orderedYearsList;
let reYearsList;

Given("I am on the site",async function(){

    this.DropdownDatePicker = new dropDownDatePicker(this.page);
    await this.DropdownDatePicker.goto(creds.url);
});

When("the date field appear I get all the years", async function(){
    
    yearsList = await this.DropdownDatePicker.getToDateSelector();
    console.log("Years: ", yearsList);

});

When("I make the list readable", async function(){

    orderedYearsList = await this.DropdownDatePicker.beautifyString(yearsList);
    console.log("nice list: ", orderedYearsList);
    
});

When("I check the starting and ending range of the list", async function(){

    expect(orderedYearsList[0]).toBe('1900');
    expect(orderedYearsList.at([-1])).toBe('2100');
    console.log("The range is scorrect");

})

When("I check the if the list is in ascending order", async function(){

    await this.DropdownDatePicker.isAscending(orderedYearsList);
    console.log("list is in ascending order.");

})

When("I check if there are any duplicates in the list", async function(){

    await this.DropdownDatePicker.hasDuplicates(orderedYearsList);
    console.log("checking for duplicates...");

});

When("I fill a random date in the date field", async function(){

    await this.DropdownDatePicker.FillDate();
    console.log("Filling a date");

})

When("I ensure its visible in the UI", async function(){

    await expect(this.page.locator(Locators.date)).toHaveValue(this.DropdownDatePicker.dateCombine());
    console.log("checking date is visible on page");

})


When("I re-extract the years from the date field make it readable", async function(){

    reYearsList = await this.DropdownDatePicker.getToDateSelector();
    console.log("years unreadable: ",reYearsList);
    reYearsList = await this.DropdownDatePicker.beautifyString(reYearsList);
    console.log("nice list", reYearsList);
    
})

Then("I Check if there are any changes in the years list before and after filling the date", async function(){
    expect(orderedYearsList).toEqual(reYearsList);
    console.log("Test passes (T-T)")
})
