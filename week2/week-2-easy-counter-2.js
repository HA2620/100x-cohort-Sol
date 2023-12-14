let b = 1

function counter(){
  console.log(b);
  b++;
  setTimeout(function(){
    // console.log(b);
    counter();
  },1000)
}
counter();
