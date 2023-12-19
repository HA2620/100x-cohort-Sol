
const fs = require("fs");

fs.readFile('hii.txt', 'utf8', function(err, data){
  console.log("Hi I just entered")
  if(err){
    console.log(err)
  }
  else{
    console.log(data);
  }
  return
});

var textToBeWritten = "Hii There! How are you?";

fs.writeFile('hii.txt',textToBeWritten,function(err) {
  if(err){
    console.log(err)
  }
  });
