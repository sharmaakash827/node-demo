var assert = require('chai').assert;
var Base = require('../helpers/base');
var Login = require('../helpers/pages/login');

beforeEach(async function(){
  await Base();
});

afterEach(async function(){
  await browser.close();
});

describe('Login Test', () => {
  it('Login test with incorrect credentials', async () => {
    let x = await Login('1234', 'abcdefghijklmnopqr');
    assert.equal(x, 'ECN no does not exits');
  });

  it('Login test with incorrect password credentials', async () => {
    let x = await Login('111', 'dhanuka@123');
    assert.equal(x, 'ECN no and Password does not match');
  });
  
  it('Login test with blank password credentials', async () => {
    let x = await Login('1000', '');
    assert.equal(x, true);
  });

  it('Login test with blank ecn credentials', async () => {
    let x = await Login('', 'dhanuka@123');
    assert.equal(x, true);
  });
 
  it('Login test with correct credentials', async () => {
    let x = await Login('1000', 'dhanuka@123');
    assert.equal(x, true);
  });
});