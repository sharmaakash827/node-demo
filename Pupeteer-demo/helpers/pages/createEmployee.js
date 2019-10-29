var Login = require('./login');
var Dashboard = require('../locators/dashboard');
var Employee = require('../locators/employeeCard');
var List = require ('../locators/listPage');

function getRandomArbitrary(min, max) { 
  let x = Math.floor(Math.random() * (max - min) + min); 
  return x.toString();
}

module.exports = async () => {

  try{
    await Login('1000', 'dhanuka@123');
    await page._click(Dashboard.Emp_Selector);
    await page._click(Dashboard.FL_Selector);
    await page._click(List.Create_Button);
    let num = getRandomArbitrary(1000,9999);
    let contact = getRandomArbitrary(1000000000,9999999999);
    await page.type(Employee.ECN_Selector, num);
    await page.type(Employee.Email_Selector,"testmail"+num+"@test.com");
    await page.type(Employee.Contact_Selector, `${contact}`);
    await page._click(Employee.Sp1Button_Selector);
    await page.clickOnXpath(Employee.SP1_XpathSelector);
    await page.clickOnXpath(Employee.SubmitButton_XpathSelector);
    await 
    await page.screenshot({path: './screenshots/createEmployee.png'});

  }catch(e){
    console.log(`CreateEmployeeTest Error: ${e}`);
  }  
};