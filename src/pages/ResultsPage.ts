import {Page} from "playwright";

export class ResultsPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    private cheapestPrice = "data-test=tab-train-price"
    private totalPrice = "data-test=cjs-price"
    private searchedLocationFrom = "data-test=change-journey-header-origin"
    private searchLocationTo = "data-test=change-journey-header-destination"
    private continueButton = "button[title='Continue']"

    public async getCheapestPrice() {
        await this.page.isVisible(this.cheapestPrice)
        return this.page.innerText(this.cheapestPrice)
    }

    public async getTotalPrice() {
        return this.page.innerText(this.totalPrice)
    }

    public async getOrigin() {
        return this.page.innerText(this.searchedLocationFrom)
    }

    public async getDestination() {
        return this.page.innerText(this.searchLocationTo)
    }

    public async continueJourney() {
        await this.page.click(this.continueButton)
    }
}