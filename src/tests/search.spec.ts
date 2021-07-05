import {HomePage} from "../pages/HomePage";
import {chromium} from "playwright";
import {ResultsPage} from "../pages/ResultsPage";

let page
let browser;
beforeAll(async () => {
    browser = await chromium.launch({args: ['--no-sandbox']})
});
afterAll(async () => {
    await browser.close();
});
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://www.akbartravels.com/b2cplus/flight")
});
afterEach(async () => {
    await page.close();

});
describe('Search test', () => {
    let origin = "DEL"
    let destination = "BOM"

    test(`should search ticket from ${origin} to ${destination}`, async () => {
        let homePage = new HomePage(page);
        let resultsPage = new ResultsPage(page);

        await homePage.searchTicket(origin, destination)

        expect(await resultsPage.getSourceCity()).toStrictEqual(origin)
        expect(await resultsPage.getDestinationCity()).toStrictEqual(destination)
    });
});