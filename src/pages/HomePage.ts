import {Page} from "playwright";

export class HomePage {
    private page: Page

    constructor(page) {
        this.page = page
    }

    private fromStation = "id=from.search"
    private toStation = "id=to.search"
    private oneWayJourney = "id=single"
    private journeyForTomorrow = "data-test=datepicker-next-day-button"
    private searchTickets = "data-test=submit-journey-search-button"
    private acceptCookiesButton = "id=onetrust-accept-btn-handler"

    private async searchFrom(from: string) {
        await this.page.fill(this.fromStation, from)
    }

    private async searchTo(to: string) {
        await this.page.fill(this.toStation, to)
    }

    private async journeyType() {
        await this.page.click(this.oneWayJourney)
    }

    private async journeyDate() {
        await this.page.click(this.journeyForTomorrow)
    }

    private async search() {
        await this.page.click(this.searchTickets)
    }

    private async acceptCookies() {
        await this.page.click(this.acceptCookiesButton)
    }

    public async searchTicket(from, to) {
        await this.acceptCookies()
        await this.searchFrom(from)
        await this.searchTo(to)
        await this.journeyType()
        await this.journeyDate()
        await this.search()
    }
}