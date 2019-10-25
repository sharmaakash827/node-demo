var LoginSelector = require ('../pages/locators/login');
var Commands = require('../pages/custom_commands');

module.exports = async () => {
  // const page = x.page;
  // // const browser = x.browser;
  // let obj = {
  //   browser:browser,
  //   page:page
  // }
  //console.log(page);
  await Commands();
  try{
    await page.goto('http://203.122.16.232:8090',{waitUntil : 'networkidle2'});  
    await page.type(LoginSelector.ECN_Selector, '111');
    await page.type(LoginSelector.PWD_Selector, 'Tftus@123');
    await page._click(LoginSelector.Submit_Selector);
    
  }catch(e){
    console.log(`LoginPage Error: ${e}`)
  }
  
 // await browser.close();
  // return obj;
};