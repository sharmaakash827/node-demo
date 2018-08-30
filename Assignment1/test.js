var checkstatus = require("./mymod").checkStatus;

checkstatus("https://www.google.com", 500);
checkstatus("https://www.google.com", 200);
