const {Given, When, Then } = require("@cucumber/cucumber");
const {ReversedCheck} = require("../pages/ReversedCheck");

let extracted;
let reversedlist;
let sortedlist;

let extractedAgain;
let reverseAgain;
let sortAgin;



const creds = require('../test-data/credentials.json');

Given("I am on the demo website", async function () {

    //const console.log("PAGE:", this.page);
    this.TestCase1 = new ReversedCheck(this.page);
    await this.TestCase1.gotoDemo();
    
});


When("I get to site I get all the labels", async function(){

    extracted = await this.TestCase1.getAllLabels();
    console.log("extracted: ",  extracted);

});

When("I reverse the labels", async function(){

    reversedlist = await this.TestCase1.reverseList(extracted);
    console.log("reversed: ", reversedlist);

});

When("I sort the reversed labels into Alphabetical order", async function(){

    sortedlist = await this.TestCase1.sortList(reversedlist);
    console.log("sorted: ", sortedlist);
})

When("I get the labels again reverse them sort them into alphabtical order", async function(){

    extractedAgain = await this.TestCase1.getAllLabels();
    reverseAgain = await this.TestCase1.reverseList(extractedAgain);
    sortAgin = await this.TestCase1.sortList(reverseAgain);

})

Then("I check the lists", async function(){
    await this.TestCase1.ExpectSame(sortedlist, sortAgin);
});

