const os = require("os");
console.log("Platform:",os.platform());
console.log("User:",os.userInfo());
console.log("CPU Architecture:",os.arch());
console.log("free Memory:",os.freemem(),"bytes");
console.log("Total Menory:",os.totalmem(),"bytes");

