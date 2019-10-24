const puppeteer = require('puppeteer-core');
const properties = require ('../properties.js');
 
module.exports = async () => {
    global.browser = await puppeteer.launch(properties);
    global.page = await browser.newPage();
    console.log(page);
};
