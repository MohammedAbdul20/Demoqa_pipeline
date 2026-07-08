const Locator = require("../Locators/randomAlerts.locators");

class randomAlerts{

    constructor(page){
        this.page = page;
        this.alertButtons = [
            Locator.alert1,
            Locator.alert2,
            Locator.alert3,
            Locator.alert4
        ]
    }

    async goto(url){
        await this.page.goto(url);
    }

    async alertBtnText(){
        let alertButtonText = [];
        
        alertButtonText.push(await this.page.locator(Locator.alert1).innerText());
        alertButtonText.push(await this.page.locator(Locator.alert2).innerText());
        alertButtonText.push(await this.page.locator(Locator.alert3).innerText());
        alertButtonText.push(await this.page.locator(Locator.alert4).innerText());

        return alertButtonText;
    }

    async getRandomBtn(){
        let randomIndex = Math.floor(Math.random() * this.alertButtons.length);
        return this.alertButtons[randomIndex];
    }

    
    async getDialogData(){
        return new Promise((resolve) => {
            this.page.once('dialog', async (dialog) => {
                const text = dialog.message();
                console.log('Actual text:', text);
                await dialog.accept();
                resolve(text);
            });

        });
    }

    
    async triggerAlertAndGetMessage() {
        const selector = await this.getRandomBtn();

        const dialogPromise = this.getDialogData();

        await this.page.click(selector);

        return await dialogPromise;
    }

    turnToLowerCase(message){
        return message.toLowerCase();
    }

    strCount(message){
        return message.trim().split(/\s+/).length;
    }

    doesOriginalHasUpperCase(message){
        return message !== message.toLowerCase();
    }

}
module.exports = {randomAlerts};