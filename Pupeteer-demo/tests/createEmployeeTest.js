var Login = require('./loginTest');
var Dashboard = require('../pages/locators/dashboard');
var Employee = require('../pages/locators/employeeCard');
var List = require ('../pages/locators/listPage');

function getRandomArbitrary(min, max) { 
  let x = Math.floor(Math.random() * (max - min) + min); 
  return x.toString();
}

module.exports = async () => {
  //console.log(page);
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
    await page.clickOnXpath(Employee.SP1_Selector);
    await page.clickOnXpath(Employee.SubmitButton_Selector);

  }catch(e){
    console.log(`CreateEmployeeTest Error: ${e}`);
  }  
};

// module.exports = CreateEmployeeTest;