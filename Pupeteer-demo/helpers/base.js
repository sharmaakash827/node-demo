const puppeteer = require('puppeteer-core');
const properties = require ('../properties.js');
const Commands = require('./custom_commands');

module.exports= async () => {
  try{      
    global.browser = await puppeteer.launch(properties);
    global.page = await browser.newPage();
    // page.setDefaultTimeout(20000);
    await page.goto('http://203.110.85.168:8013/',{waitUntil : 'networkidle2'});
    await Commands();

  }catch(e){
    console.log(`Base file Error: ${e}`)
  }
};
