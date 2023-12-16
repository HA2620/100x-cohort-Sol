// The function makes the thread sleep 
// workflow - currTime will store present miisecond , runnning while date.now < currTime+ userMiliSec . Date.now() will keep on increasing as soo
// as it eql to currTime + userMili while loop ends and thread will be free again.


function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        const currentTimestamp = Date.now()
        while (Date.now() < currentTimestamp + milliseconds) {
      console.log(Date.now());
      console.log(currentTimestamp + milliseconds);

        }
        resolve()
    })
}
console.log("Hiii 1");
sleep(1000).then(() => {
  console.log("logged");
})
console.log("Hiii 2");
