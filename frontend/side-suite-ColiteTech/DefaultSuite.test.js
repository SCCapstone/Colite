jest.setMock('selenium-webdriver', webdriver);
// This file was generated using Selenium IDE
const tests = require("./commons.js");
global.Key = require('selenium-webdriver').Key;
global.URL = require('url').URL;
global.BASE_URL = configuration.baseUrl || 'http://colite-tech-deployment-v2.s3-website-us-east-1.amazonaws.com';
let vars = {};
jest.setTimeout(300000);
describe("Default Suite", () => {
  it("behavior-tests-v6", async () => {
    await tests["behavior-tests-v6"](driver, vars);
    expect(true).toBeTruthy();
  });
});
beforeEach(() => {
  vars = {};
});
afterEach(async () => (cleanup()));