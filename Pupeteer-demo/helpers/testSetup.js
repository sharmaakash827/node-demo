var base = require('../helpers/base');

beforeEach(async function(){
  await base();
});

afterEach(async function(){
  let t = this.currentTest
  if (t.state === 'failed'){
    await page.screenshot({path: './screenshots/'+t.title+'_screenshot.png'});
  }
  await browser.close();
});
