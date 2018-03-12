const puppeteer = require('puppeteer');
const currentDate = require('./get-israel-time')
module.exports = function() {
  const fileName = `${currentDate()}.png`;
  (async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://www1.isracard.co.il/prim3364');
    await page.screenshot({ path: `./screenshots/${fileName}` });

    await browser.close();
  })();
};
