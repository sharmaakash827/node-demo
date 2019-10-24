
page._click = async function(selector){
  await page.waitForSelector(selector);
  await page.click(selector);
}