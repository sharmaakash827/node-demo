const puppeteer = require('puppeteer-core');
const properties = require ('../properties.js');
//var Custom_Commands = require('../pages/custom_commands');

 module.exports = async () => {
//(async () => {
    try{
      const browser = await puppeteer.launch(properties);
      const page = await browser.newPage();
      global.page = page;
      global.browser = browser ;     
    }catch(e){
        console.log(`Base file Error: ${e}`)
    }
 };
// })();