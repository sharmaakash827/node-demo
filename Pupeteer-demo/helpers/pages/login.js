var loginSelector = require ('../locators/login');

module.exports = async (username, password) => {
  try{
      
    await page.type(loginSelector.ECN_Selector, username);
    await page.type(loginSelector.PWD_Selector, password);
    await page._click(loginSelector.Submit_Selector);

    try { 
      let exists = !!(await page.$x(loginSelector.Error_Xpath_Selector));
     
      if (exists)
      {
        var [element_new] = await page.$x(loginSelector.Error_Xpath_Selector);
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