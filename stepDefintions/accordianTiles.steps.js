const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const creds = require('../test-data/credentials.json');
const {accordianTiles} = require("../pages/accordianTiles");

let list;
let revlist;
let reextract;

Given("I am on the Accordion page", async function(){

    this.AccordianTiles = new accordianTiles(this.page);
    await this.AccordianTiles.goto(creds.Accordian_URL);

});

When("I am on the page get the Titles", async function(){

    list = await this.AccordianTiles.getTitleText();
    console.log("list: ", list);

});

When("I reverse the titles in a new list", async function(){

    revlist = this.AccordianTiles.reverseList(list);
    console.log("reversed list: ", revlist);
});

When("I collapse the accordian", async function(){

    await this.AccordianTiles.clickCollapse();

});

When("I re-extract the titles", async function(){

    reextract = await this.AccordianTiles.reExtractTitles();
    console.log("reExtracted titles: ", reextract);

})

When("I reverse the re-extracted titles", async function(){
    
    reextract = await this.AccordianTiles.reverseList(reextract);
    console.log("Reversed list: ", reextract);

});

Then("I compare the reversed titles", async function(){

    expect(revlist).toEqual(reextract);
    console.log("strings match (T^T)");

});