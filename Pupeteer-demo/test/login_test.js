var assert = require('chai').assert;
// var Base = require('../helpers/base');
var login = require('../helpers/pages/login');

// beforeEach(async function(){
//   await Base();
// });

// afterEach(async function(){
//   let t = this.currentTest
//   if (t.state === 'failed'){
//     await page.screenshot({path: './screenshots/'+t.title+'_screenshot.png'});
//   }
//   await browser.close();
// });


describe('Login Test', () => {
  it('Login test with incorrect credentials', async () => {
    let x = await login('1234', 'abcdefghijklmnopqr');
    assert.equal(x, 'ECN no does not exits');
  });

  it('Login test with incorrect password credentials', async () => {
    let x = await login('111', 'dhanuka@123');
    assert.equal(x, 'ECN no and Password does not match');
  });
  
  it('Login test with blank password credentials', async () => {
    let x = await login('1000', '');
    assert.equal(x, true);
  });

  it('Login test with blank ecn credentials', async () => {
    let x = await login('', 'dhanuka@123');
    assert.equal(x, true);
  });
 
  it('Login test with correct credentials', async () => {
    let x = await login('1000', 'dhanuka@123');
    assert.equal(x, true);
  });
});