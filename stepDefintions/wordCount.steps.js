const {Given, When, Then} = require("@cucumber/cucumber");
const {wordCount} = require("../pages/wordCount");
const creds = require("../test-data/credentials.json");
const {expect} = require("@playwright/test");

let wordList;
let twoWordList;

Given("I am on the form site", async function(){

    this.WordCount = new wordCount(this.page);
    await this.WordCount.goToDemo(creds.url);

});

When("I get the all the autocomplete option appear",async function(){

    await this.WordCount.filldata();
    // console.log("words: ", wordList);

});

When("I extract all the options labels",async function(){

    wordList = await this.WordCount.extractLabels();
    console.log("words: ", wordList);

});

When("I filter the options containing Two words", async function(){

    twoWordList = await this.WordCount.filterList(wordList);
    console.log(twoWordList);

})

When("I split the list based on spaces", async function(){

    console.log(await this.WordCount.splitList(wordList));

});

Then("I compare length of two words and original list",async function(){

    expect(twoWordList.length).toBeLessThan(wordList.length);
    console.log("test passes");

});