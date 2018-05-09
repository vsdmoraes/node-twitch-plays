// Type "Hello World" then press enter.
var robot = require("robotjs");

while(1){
    setTimeout(function(){
        robot.keyTap("a");
    }, 100);
}
