var Base = require ('../Base.js');

(async () => {
  const browser = await Base();
  const page = await browser.newPage();
  await page.goto('http://203.122.16.232:8090',{waitUntil : 'networkidle2'})
  browser.close();
})();