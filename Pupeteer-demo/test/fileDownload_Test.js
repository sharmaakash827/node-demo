var assert = require('chai').assert;
var expect = require('chai').expect;
// var Base = require('../helpers/base');
var login = require('../helpers/pages/login');
const fs = require('file-system');
const downloadPath = __dirname+'/myFiles';

describe.only('Download File Test', () => {

    it('Verify the downloads', async () => {

        await login('111', 'Tftus@123');
        await page.click('a[href="/navs/data-dump"]');
        await page.click('a[routerlink="/data-dump/fuel-rate');
        await page.waitForSelector('button[class="btn btn-success"]');
        await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: downloadPath});
        await page.click('button[class="btn btn-success"]');
    
        await page.waitFor(5000);   

        await fs.readdir(downloadPath, async function(err, items) {
        // console.log(items);
    
            await expect(items[0]).to.equal('fuel-rate.xlsx');
            await fs.rmdirSync(downloadPath);
        });
    });
})