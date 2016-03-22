var MegaPi = require("../megapi").MegaPi;
var bot = new MegaPi(onStart);
var port = 6;
var slot = 1;
var level = 1;
function loop(){
  bot.servoRun(port,slot,level?100:40);
  level = 1-level;
}
function onStart(){
  setInterval(loop,1000);
}