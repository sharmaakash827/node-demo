const puppeteer = require('puppeteer-core');
var property = require('./properties.js')
 
function Base(){
    return async function() {
        try{
            var browser = await puppeteer.launch(property);
        }catch(e){
            console.log(`${e}`);
        }
    };
}

module.exports = Base;