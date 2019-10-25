var Login = require('./loginTest');
var Dashboard = require('../pages/locators/dashboard');
var Employee = require('../pages/locators/employeeCard');
var List = require ('../pages/locators/listPage');

module.exports = async () => {
  //console.log(page);
  try{
    await Login();
    await page._click(Dashboard.Emp_Selector);
    await page._click(Dashboard.FL_Selector);
    await page._click(List.Create_Button);
  
  }catch(e){
    console.log(`CreateEmployeeTest Error: ${e}`);
  }  
};

// module.exports = CreateEmployeeTest;