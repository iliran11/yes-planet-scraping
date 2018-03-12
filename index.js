var cron = require('node-cron');
const puppeteer = require('puppeteer');
const moment = require('moment');

cron.schedule('0 */15 * * * * *', function() {
  console.log("hello")
  const currentDate = moment().format('DD-MM-YYYY__HH-mm');
  const fileName = `${currentDate}.png`;
  (async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});    ;
    const page = await browser.newPage();
    await page.goto('https://www1.isracard.co.il/prim3364');
    await page.screenshot({ path: fileName });

    await browser.close();
  })();
});
