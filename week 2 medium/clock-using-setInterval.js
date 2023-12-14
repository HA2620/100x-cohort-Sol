var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes() + 30;
var h = d.getHours() + 5;

if(m>60){
  h++;          // Done for converting into IST
  m = m-60;
}
// console.log(h,":",m,":",s)
setInterval(function(){
  console.log(h,":",m,":",s++)
},1000)