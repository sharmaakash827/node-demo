const puppeteer = require('puppeteer-core');
const property = require ('./properties.js');

async function Base() {
  try {
    const browser = await puppeteer.launch(property);
    return browser;
  }catch(e){
    console.log(`${e}`);
  }
};

module.exports = Base;