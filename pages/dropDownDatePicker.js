const Locators = require("../Locators/dropDownDatePicker.locators");


class dropDownDatePicker{

    constructor(page){
        this.page = page;
        this.randomDate = this.getRandomDate();
    }

    async goto(url){
        await this.page.goto(url);
    }

    async getToDateSelector(){
        await this.page.locator(Locators.date).click();
        //await this.page.WaitForTimeout(150);
        await this.page.locator(Locators.year_picker).click();
        let allYears = [];
        allYears.push(await this.page.locator(Locators.year_picker).allTextContents());
        return allYears;
    }

    async beautifyString(list){
        let str = list[0][0];

        const formatted = str.match(/.{4}/g);

        return formatted;
    }

    isAscending(list){
        for( let i = 0; i < list.length - 1; i++){
            
            if(list[i] > list[i+1]){
                
                // console.log("The array is not in ascending order");
                return false;
                
            }
        }
        // console.log('The array is in Ascending order');
        return true;
    }

    hasDuplicates(list) {
        return new Set(list).size !== list.length;
    }

        
    getRandomDate() {

        const start = new Date('1900-01-01').getTime();
        const end = new Date('2100-01-01').getTime();

        return new Date(start + Math.random() * (end - start));
    }

    getDay() {
        return this.randomDate.getDate();
    }

    getMonth() {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return months[this.randomDate.getMonth()];
    }

    getYear() {
        return this.randomDate.getFullYear();
    }

    dateCombine(){
        let Date = `${this.getDay()} ${this.getMonth()} ${this.getYear()}`;
        return Date;
    }

    async FillDate(){
        let Date = `${this.getDay()} ${this.getMonth()} ${this.getYear()}`;
        await this.page.fill(Locators.date, Date);
    }
}

module.exports = {dropDownDatePicker};