var Login = require('./loginTest.js');
var Dashboard = require('../pages/locators/dashboard');
var Employee = require('../pages/locators/employeeCard');
var List = require ('../pages/locators/listPage');

(async ()=> {
  await Login();
  // console.log(x)
  // const page = x.page;
  // const browser = x.browser;

  // await page.waitForSelector(Dashboard.Emp_Selector);
  //await page.dashboard.clickEmpSelector();
  await page._click(Dashboard.Emp_Selector);
  // await page.waitForSelector(Dashboard.FL_Selector);
  await page._click(Dashboard.FL_Selector);
  // await page.waitForSelector(List.Create_Button);
  await page._click(List.Create_Button);

})();