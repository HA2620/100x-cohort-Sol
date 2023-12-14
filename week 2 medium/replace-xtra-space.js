const fs = require("fs");
var inFile = fs.readFileSync('hii.txt')
var newFile = inFile.toString();
const myarr = newFile.split(" ");

for(let i = 0; i < myarr.length ; i++){
  if(myarr[i] == "" && myarr[i+1] == ""){
    myarr.splice(i+1,1);
  }}
  
var ans = '';

for(var i = 0 ; i < myarr.length ; i++){
  if(myarr[i] != ""){
    ans += myarr[i] + " ";
  }
}
console.log(ans)

fs.writeFile('hii.txt',ans,function(err) {
  if(err){
    console.log(err)
  }
  });
