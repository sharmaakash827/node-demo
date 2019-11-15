const puppeteer = require('puppeteer-core');
const expect = require('chai').expect;
const fs = require('file-system');
const downloadPath = "__dirname+'/myFiles'";
(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 50,
      executablePath: '/usr/bin/google-chrome',
    });
    const page = await browser.newPage();
    await page.goto('http://203.110.85.168:8013/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[formcontrolname="ecn_no"]');
    await page.type('input[formcontrolname="ecn_no"]', '111');
    await page.type('input[formcontrolname="password"]', 'Tftus@123');
    await page.waitForSelector('.btn.btn-success')
    await page.click('.btn.btn-success');
    await page.waitFor(2000)
    // await browser.close();
    await page.click('a[href="/navs/data-dump"]');
    await page.click('a[routerlink="/data-dump/fuel-rate');
    await page.waitForSelector('button[class="btn btn-success"]');
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: downloadPath});
    await page.click('button[class="btn btn-success"]');
   
    await page.waitFor(5000);   

    fs.readdir(downloadPath, function(err, items) {
      console.log(items);
   
      expect(items[0]).to.equal('fuel-rate.xlsx');
  });
  } catch (e) {
    console.log(`This is my Error : ${e}`)
  }
})();