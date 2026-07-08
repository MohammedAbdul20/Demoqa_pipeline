const Locator = require("../Locators/accordianTiles.locators");

class accordianTiles{

    constructor(page){
        this.page = page;
    }

    async goto(url){
        await this.page.goto(url);
    }

    async getTitleText(){
        let titles = [];
        titles.push(await this.page.locator(Locator.acordian1.val).nth(Locator.acordian1.index).innerText());
        titles.push(await this.page.locator(Locator.accordian2.val).nth(Locator.accordian2.index).innerText());
        titles.push(await this.page.locator(Locator.accordian3.val).nth(Locator.accordian3.index).innerText());
        return titles;
    }

    reverseList(list){
        let revlist = [];
        for(let i = 0; i < list.length; i++){
            revlist.push(list[i].split("").reverse().join(""));
        }
        return revlist;
    }

    async clickCollapse(){
        await this.page.locator(Locator.acordian1.val).nth(Locator.acordian1.index).click();
    }

    async reExtractTitles(){
        let reExtractList = [];
        reExtractList.push(await this.page.locator(Locator.accordianCollapsed.val).nth(Locator.accordianCollapsed.index).innerText());
        reExtractList.push(await this.page.locator(Locator.accordianCollapsed1.val).nth(Locator.accordianCollapsed1.index).innerText());
        reExtractList.push(await this.page.locator(Locator.accordianCollapsed2.val).nth(Locator.accordianCollapsed2.index).innerText());
        return reExtractList;
    }
}
module.exports = {accordianTiles}