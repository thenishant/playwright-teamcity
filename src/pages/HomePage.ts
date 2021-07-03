import {Page} from "playwright";

export class HomePage {

    private page: Page

    constructor(page) {
        this.page = page
    }

    private fromStation = 'li[id="liFrom"]'
    private fromInputText = 'input[placeholder="From"]'
    private toInputText = 'input[placeholder="To"]'
    private nextWeekendDepartDate = 'div[class="weekend ng-star-inserted"]'
    private searchFlights = "//span[contains(text(),'Search Flights')]"
    private oneWayJourneyButton = 'div[class="mat-radio-label-content"]'

    private async searchFrom(from: string) {
        await this.page.click(this.fromStation)
        await this.page.fill(this.fromInputText, from)
        await this.page.click(`#${from}`)
    }

    private async searchTo(to: string) {
        await this.page.fill(this.toInputText, to)
        await this.page.click(`#${to}`)
    }

    private async oneWayJourney() {
        await this.page.click(this.oneWayJourneyButton)
    }

    private async search() {
        await this.page.click(this.searchFlights)
    }

    private async depart() {
        await this.page.click(this.nextWeekendDepartDate)
    }

    public async searchTicket(from, to) {
        await this.oneWayJourney()
        await this.searchFrom(from)
        await this.searchTo(to)
        await this.depart()
        await this.search()
    }
}