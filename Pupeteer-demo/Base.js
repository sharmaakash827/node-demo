const puppeteer = require('puppeteer-core');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            executablePath: '/usr/bin/google-chrome'
        });
        const page = await browser.newPage();
    } catch (e) {
        console.log(`This is my Error : ${e}`);
    }
})();