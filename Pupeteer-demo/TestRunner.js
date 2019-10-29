var createEmployeeTest = require('./tests/createEmployeeTest');
var Base = require('./pages/base');
//var assert

(async () => {
  await Base();
  await createEmployeeTest();
  await browser.close();
})();

