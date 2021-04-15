const utils = require("./utils.js");
const tests = {};
tests["behavior-tests-v6"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1294,
      height: 694
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.linkText(`List of Parts`)), configuration.timeout);
  await driver.findElement(By.linkText(`List of Parts`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(2)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(2)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(3)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(3)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(4)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(4)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.linkText(`Graphs`)), configuration.timeout);
  await driver.findElement(By.linkText(`Graphs`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(2)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(2)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(3)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(3)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.list-group-item:nth-child(4)`)), configuration.timeout);
  await driver.findElement(By.css(`.list-group-item:nth-child(4)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`button:nth-child(1)`)), configuration.timeout);
  await driver.findElement(By.css(`button:nth-child(1)`)).then(element => {
    return element.click();
  });
  await driver.executeScript(`window.scrollTo(0,0)`);
  await driver.wait(until.elementLocated(By.css(`div > button:nth-child(2)`)), configuration.timeout);
  await driver.findElement(By.css(`div > button:nth-child(2)`)).then(element => {
    return element.click();
  });
}
module.exports = tests;