import {HomePage} from "../pages/HomePage";
import {chromium} from "playwright";
import {ResultsPage} from "../pages/ResultsPage";

let page
let browser;
beforeAll(async () => {
    browser = await chromium.launch({headless: false});
});
afterAll(async () => {
    await browser.close();
});
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://www.thetrainline.com/")
});
afterEach(async () => {
    await page.close();
});
describe('Search test', () => {
    let origin = "London"
    let destination = "Leeds"

    test(`should search ticket from ${origin} to ${destination}`, async () => {
        let homePage = new HomePage(page);
        let resultsPage = new ResultsPage(page);

        await homePage.searchTicket(origin, destination)

        expect(await resultsPage.getCheapestPrice()).toStrictEqual(await resultsPage.getTotalPrice())
        expect(await resultsPage.getOrigin()).toStrictEqual(origin)
        expect(await resultsPage.getDestination()).toStrictEqual(destination)

    });
});