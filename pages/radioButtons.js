const Locator = require("../Locators/radioButtons.locators");


class radioButtons{

    constructor(page){
        this.page = page;
    }

    async goto(url){
        await this.page.goto(url);
    }

    async getLabels(){
        let radioLabels = [];

        radioLabels.push(await this.page.locator(Locator.MaleRadiobtn.val).nth(Locator.MaleRadiobtn.index).innerText());
        radioLabels.push(await this.page.locator(Locator.FemaleRadiobtn.val).nth(Locator.FemaleRadiobtn.index).innerText());
        radioLabels.push(await this.page.locator(Locator.OtherRadiobtn.val).nth(Locator.OtherRadiobtn.index).innerText());

        return radioLabels;

    }

    processLabels(list){
        let processedList = [];
        for(let i = 0; i < list.length; i++){
            processedList.push(list[i].toUpperCase().replace(/\s/g,""));
        }
        return processedList;
    }

    arrayCheck(list){

        for(let i = 0; i < list.length; i++){
            if(list[i].length >= 4 && list[i].toUpperCase() === list[i]){
                console.log(`${list[i]} is Valid`);
            }
        }

    }
}

module.exports = {radioButtons}