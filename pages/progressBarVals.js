const Locator = require("../Locators/progressBarVals.locators");

class progressBarVals{

    constructor(page){
        this.page = page;
        this.startStopButton = page.locator(Locator.StartStopBtn);
        this.progressBarRole = page.locator(Locator.progressBarRole);
        this.resetButton = page.getByRole(Locator.resetButton.role, {name: Locator.resetButton.name});
    }

    async goto(url){
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
        await this.startStopButton.waitFor({ state: 'visible' });
    }

    async isResetVisible() {
        return await this.resetButton.isVisible();
    }
 
  /** Read current aria-valuenow as a number */
    async getCurrentValue() {
        const raw = await this.progressBarRole.getAttribute('aria-valuenow');
        return raw !== null ? Number(raw) : 0;
    }
 
  
    async resetBar() {
        await this.resetButton.waitFor({ state: 'visible', timeout: 500 });
        await this.resetButton.click();
        console.log('🔄 Reset clicked — waiting for bar to return to 0');
    // Wait until aria-valuenow is back to "0" before continuing
        await this.progressBarRole.waitFor({ state: 'visible' });
        await this.page.waitForFunction(() => {
            const el = document.querySelector('[role="progressbar"]');
            return el && el.getAttribute('aria-valuenow') === '0';
            }, { timeout: 400 });
        console.log('✅ Bar reset to 0');
    }
 
  
    async captureProgressValues(sampleCount = 10, runMs = 800) {
        const rawValues = [];
 
        while (rawValues.length < sampleCount) {
            await this.startStopButton.click();
            console.log('▶ Bar started');
            await this.page.waitForTimeout(runMs);
            const value = await this.getCurrentValue();
            if (value < 100) {
                await this.startStopButton.click();
                console.log(`⏹ Bar stopped at ${value}%`);
            } else {
                console.log(`🏁 Bar auto-completed at 100% — skipping Stop click`);
            }
            rawValues.push(`${value}%`);
            console.log(`  Captured [${rawValues.length}/${sampleCount}]: ${value}%`);
            if (value === 100) {
                await this.resetBar();
            }
            }
        return rawValues;
    }

    async ProcessList(list){

        let processedList = [];
        for(let i = 0; i < list.length; i++){
            processedList.push(Number(list[i].replace("%", "")));
        }
        return processedList;

    }

    filteredArray(list){
        let filtered = [];
        return list.filter(n => n >= 50);
    }

    NewListCount(list){
        return list.length;
    }
}
module.exports = {progressBarVals};