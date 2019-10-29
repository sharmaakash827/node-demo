var login = require('./login');
var dashboard = require('../locators/dashboard');
var employee = require('../locators/employeeCard');
var list = require ('../locators/listPage');

function getRandomArbitrary(min, max) { 
  let x = Math.floor(Math.random() * (max - min) + min); 
  return x.toString();
}

module.exports = async () => {

  try{
    await login('1000', 'dhanuka@123');
    await page._click(dashboard.Emp_Selector);
    await page._click(dashboard.FL_Selector);
    await page._click(list.Create_Button);
    let num = getRandomArbitrary(1000,9999);
    let contact = getRandomArbitrary(1000000000,9999999999);
    await page.type(employee.ECN_Selector, num);
    await page.type(employee.Email_Selector,"testmail"+num+"@test.com");
    await page.type(employee.Contact_Selector, `${contact}`);
    await page._click(employee.Sp1Button_Selector);
    await page.clickOnXpath(employee.SP1_XpathSelector);
    await page.clickOnXpath(employee.SubmitButton_XpathSelector);
    // await 
    await page.screenshot({path: './screenshots/createEmployee.png'});
    return true;

  }catch{
    return false;
  }  
};