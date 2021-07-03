import {Page} from "playwright";

export class ResultsPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    private originCity = 'ul.left > li:nth-child(1) > h2:nth-child(1)'
    private destinationCity = 'h2:nth-child(3)'

    public async getSourceCity() {
        await this.page.waitForSelector(this.originCity)
        let currentDateData = await this.page.$$(this.originCity);
        let completeCityName = await currentDateData[0].textContent().then(city => city.split(" "));
        return completeCityName[0]
        // return currentDateData[0].innerText()
    }

    public async getDestinationCity() {
        let currentDateData = await this.page.$$(this.destinationCity);
        let completeCityName = await currentDateData[0].textContent().then(city => city.split(" "));
        return completeCityName[0]
    }
}