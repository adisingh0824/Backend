//fs.writeFile("data.txt","Hello", {flag:"w" }, callback);
//s.writeFile("logs.txt","New log\n", {flag:"a" }, callback);
//fs.open("file.txt","r+", callback);
fs.writeFile("logs.txt","hi",{flags: "w",mode: "0o600"}, (err) =>{
    if(err) console.log(err.message);
});