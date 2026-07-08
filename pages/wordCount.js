const Locators = require("../Locators/wordCount.locators");
const data =  require('../test-data/wordCount.InputData.json');
const creds = require("../test-data/credentials.json");


class wordCount{

    constructor(page){

        this.page = page;
    }
    
    async goToDemo(url){
        await this.page.goto(url);
    }


    async filldata(){

        for (const items of data.chars){
            await this.page.locator(Locators.suggestionBox).fill(items.val);

            await this.page.waitForTimeout(200);

            await this.page.keyboard.press('Enter');
        }
        
    }

    async extractLabels(){
        
        let subLabel = [];
        const count = await this.page.locator(Locators.SubjectLabel).count();

        for(let i = 0; i < count; i++){
            subLabel.push(await this.page.locator(Locators.SubjectLabel).nth(i).innerText());
        }

        return subLabel;
        // console.log(count);
    }

    async filterList(list){
        this.list = list;
        let filteredList = [];
        for(const item of list){
            if(item.includes(" ")){
                filteredList.push(item);
            }
            else{
                continue;
            }
        }
        return filteredList;
    }

    async splitList(list){
        this.list = list;
        let splitedList = [];
        for(const item of list){
            splitedList.push(item.split(" "));
        }
        return splitedList;
    }
}

module.exports = {wordCount}

