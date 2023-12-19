const { log } = require("console");
const fs = require("fs");
fs.readFile('hii.txt', 'utf8', function(err, data){
  console.log("Hi I just entered")
  fs.readFile('bye.txt', 'utf8', function(err, data){
  console.log("Hi I just entered in bye")
    
    console.log(data);
  })
  if(err){
    console.log(err)
  }
  else{
    console.log(data);
  }
  return
});
console.log("Hii 2nd time");
let a=0;
for(let i = 0 ; i<1000000000;i++){
  a++;
}
console.log("Hii 3rd time");
