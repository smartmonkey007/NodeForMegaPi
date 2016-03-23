var MegaPi = require("../megapi").MegaPi;
var bot = new MegaPi(onStart);

function onRead(dist){
  console.log(dist+" cm");
}

function loop(){
  bot.ultrasonicSensorRead(6,onRead);
}
function onStart(){
  setInterval(loop,300);
}