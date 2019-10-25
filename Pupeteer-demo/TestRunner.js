var createEmployeeTest = require('./tests/createEmployeeTest');
//var assert

(async () => {
await createEmployeeTest();
await browser.close();
})();

