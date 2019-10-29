var LoginSelector = require ('../locators/login');
var assert = require('chai').assert;

module.exports = async (username, password) => {
  try{
      
    await page.type(LoginSelector.ECN_Selector, username);
    await page.type(LoginSelector.PWD_Selector, password);
    await page._click(LoginSelector.Submit_Selector);

    try { 
      let exists = !!(await page.$x(LoginSelector.Error_Xpath_Selector));
     
      if (exists)
      {
        var [element_new] = await page.$x(LoginSelector.Error_Xpath_Selector);
        var text = (await element_new.getProperty('textContent')).jsonValue();
        return text;   
                
      }else{
        return true;
      }
  
    }catch{
      return true;
    }
  
  }catch{
    return false;
  }
};