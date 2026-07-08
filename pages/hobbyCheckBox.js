const Locators = require("../Locators/hobbyCheckBox.locators");
//const {expect}

class hobbyCheckBox{

    constructor(page){
        this.page = page;
    }

    async goto(url){
        await this.page.goto(url);
    }

    async getLabels(){

        let hobbiesLabels = [];

        hobbiesLabels.push(await this.page.locator(Locators.HobbySportsbtn.val).nth(Locators.HobbySportsbtn.index).innerText());
        hobbiesLabels.push(await this.page.locator(Locators.HobbyReadingbtn.val).nth(Locators.HobbyReadingbtn.index).innerText());
        hobbiesLabels.push(await this.page.locator(Locators.HobbyMusicbtn.val).nth(Locators.HobbyMusicbtn.index).innerText());

        return hobbiesLabels;

    }

    async checkFirstTwoHobbies(){
        
        await this.page.locator(Locators.HobbySportsbtn.val).nth(Locators.HobbySportsbtn.index).check();
        await this.page.locator(Locators.HobbyReadingbtn.val).nth(Locators.HobbyReadingbtn.index).check();

    }

    async firstTwolabelsComibined(){

        let twoLabels = [];

        twoLabels.push(await this.page.locator(Locators.HobbySportsbtn.val).nth(Locators.HobbySportsbtn.index).innerText());
        twoLabels.push(await this.page.locator(Locators.HobbyReadingbtn.val).nth(Locators.HobbyReadingbtn.index).innerText());
        
        
        return twoLabels.join(", ");

    }

    async ClicktoSubmit(){
        await this.page.locator(Locators.FirstName).fill("riyan");
        await this.page.locator(Locators.LastName).fill("parag");
        await this.page.locator(Locators.Gender).check();
        await this.page.locator(Locators.number).fill('1234567891');
        await this.page.locator(Locators.Submit).click();
    }

    async textConfirm(text){
        await expect(await this.page.locator(Locators.modal_body).getByText(text)).toBeVisible();
        return console.log("Both match");
    }
}
module.exports = {hobbyCheckBox};