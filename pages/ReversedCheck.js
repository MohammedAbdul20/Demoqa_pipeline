const Locators = require('../Locators/ReversedCheck.locators');
const creds = require('../test-data/credentials.json');

const {test, expect} = require('@playwright/test');
//const {page} = require('../utilities/hooks/hooks')


class ReversedCheck{

    //initializing page
    
    constructor(page){
        this.page = page;
    }


    //A simple goto function fecthing URl from a json file
    
    async gotoDemo() {
        await this.page.goto(creds.url);
    }


    //try to scope the locator

    //getting all the label Names individually 
    async getAllLabels(){
        const labelNames = []
        
        //Bringig each Locator here from json file and using innertext and pushing into a list
        labelNames.push(await this.page.locator(Locators.Name).innerText());
        labelNames.push(await this.page.locator(Locators.Email).innerText());
        labelNames.push(await this.page.getByText(Locators.Gender).innerText());
        labelNames.push(await this.page.locator(Locators.number).innerText());
        labelNames.push(await this.page.locator(Locators.Date).innerText());
        labelNames.push(await this.page.locator(Locators.Subjects.val).nth(Locators.Subjects.index).innerText());
        labelNames.push(await this.page.locator(Locators.Hobbiess.val).nth(Locators.Hobbiess.index).innerText());
        labelNames.push(await this.page.locator(Locators.Picture.val).nth(Locators.Picture.index).innerText());
        labelNames.push(await this.page.locator(Locators.Current_address).innerText());
        labelNames.push(await this.page.locator(Locators.State_and_City).innerText());

        return labelNames;
    }

    //Reversing the given list.
    async reverseList(list){
        this.list = list;
        let reversedList = [];
        reversedList = list.map(function(name){
            return name.split("").reverse().join("")
        });
        return reversedList;
    }

    //sorting the reversed list into alphabetical order. 
    async sortList(list){
        this.list = list;
         
        let sortedList = [];
        sortedList = list.sort();
        return sortedList;
    }

    async ExpectSame(list1, list2){
        await expect(list1).toStrictEqual(list2);
    }


}

module.exports = {ReversedCheck}