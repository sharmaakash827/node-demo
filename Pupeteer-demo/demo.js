const puppeteer = require('puppeteer-core');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage();
    await page.goto('http://203.110.85.168:8013/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[formcontrolname="ecn_no"]');
    await page.type('input[formcontrolname="ecn_no"]', '111');
    await page.type('input[formcontrolname="password"]', 'Tftus@123');
    await page.waitForSelector('.btn.btn-success')
    await page.click('.btn.btn-success');
    await page.waitFor(5000)
    await browser.close();

  } catch (e) {
    console.log(`This is my Error : ${e}`)
  }
})();