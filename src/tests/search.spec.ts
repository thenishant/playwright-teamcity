import {HomePage} from "../pages/HomePage";
import {chromium} from "playwright";
import {ResultsPage} from "../pages/ResultsPage";

const fs = require("fs");
const {addAttach} = require("jest-html-reporters/helper");

let page
let browser;
beforeAll(async () => {
    browser = await chromium.launch({headless: true, args: ['--no-sandbox']})
});
afterAll(async () => {
    await browser.close();
});
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://www.akbartravels.com")
});
afterEach(async () => {
    await attachFailedTestScreenshotToReport()
    await page.close();

});
describe('Search test', () => {
    let origin = "DEL"
    let destination = "BOM1"

    test(`should search ticket from ${origin} to ${destination}`, async () => {
        let homePage = new HomePage(page);
        let resultsPage = new ResultsPage(page);

        await homePage.searchTicket(origin, destination)

        expect(await resultsPage.getSourceCity()).toStrictEqual(origin)
        expect(await resultsPage.getDestinationCity()).toStrictEqual(destination)
    });
});

async function attachFailedTestScreenshotToReport() {
    let image = await page.screenshot({path: 'src/html-report/screenshot/screen.png'});
    await addAttach(image);
}