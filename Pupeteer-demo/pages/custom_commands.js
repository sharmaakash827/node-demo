var Base = require('./base');

module.exports = async () => {
  await Base();
  page._click = async function(selector){
    try{
      await page.waitForSelector(selector);
      await page.click(selector);
    }catch(e){
      console.log(`Custom Commands Error: ${e}`);
    }
  }
};