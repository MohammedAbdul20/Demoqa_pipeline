const Locators = require("../Locators/truncateModal.locators");

class truncateModal{

    constructor(page){
        this.page = page;
    }

    async goto(url){
        await this.page.goto(url);
    }

    async clickLargeModal(){
        await this.page.locator(Locators.largeModal).click();
    }

    async getLargeModalText(){
        let text = [];
        text.push(await this.page.locator(Locators.largeModal_body).innerText());
        return text;
    }

    async processText(text){
        let processedList = [];
        for(let i = 0 ; i < text.length; i++){
            processedList.push(text[i].split(' '));
        }
        return processedList;
    }

    async bigString(text){
        return text.toString();
    }

    async smallString(text){

        let smallstring = [];
        for(let i = 0; i < 10; i++){
            smallstring.push(text[0][i]);
        }

        return smallstring.join(" ").toString();
    }

    arrayChecker(array1, array2){

        if(array1.includes(array2)){
            console.log("The small string exists in the large text");
        }
        else{
            console.log('lol');
        }
    }

    async clickClose(){
        await this.page.locator(Locators.close).click();
    }
}
module.exports = {truncateModal};