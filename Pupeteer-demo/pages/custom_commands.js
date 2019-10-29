module.exports = async () => {
  
  page._click = async function(selector){
      await page.waitForSelector(selector);
      await page.click(selector);
  }
  
  page.clickOnXpath = async function(selector){
      await page.waitForXPath(selector);
      const [element] = await page.$x(selector);
      await element.click(); 
  }
};