const puppeteer = require('puppeteer-core');
const properties = require ('../properties.js');

 module.exports = async () => {
    try{
      const browser = await puppeteer.launch(properties);
      const page = await browser.newPage();
      global.page = page;
      global.browser = browser ;     
    }catch(e){
        console.log(`Base file Error: ${e}`)
    }
 };
