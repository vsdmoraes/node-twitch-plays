var tw = require('twitch-webchat');
var ks = require('node-key-sender');


// The channel name here
var channelName = 'mestre_ladino';

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}



var controls = tw.start( channelName, function (err, message) {
  if (err) throw err
 
  switch (message.type) {
    case 'chat':  
      var text = message.text.toLowerCase()  
    
     //if(isLetter(text) || text == "left" || text == "right" || text == "up" || text == "down" )
     //if(text == "a" || text == "b" || text == "w" || text == "d" || text == "e" || text == "space" || text == "left" || text == "right" || text == "up" || text == "down") {
     switch(text){
         case 'l':
         case 'r':
            ks.sendKey(text);
            break;
            case 'start':
            ks.sendKey("enter");
            break;
            case 'select':
            ks.sendKey("space");
            break;
        case 'a':
            ks.sendKey('z');
            break;
        case 'b':
            ks.sendKey('x');
            break;
        case 'x':
            ks.sendKey('a');
            break;
        case 'y':
            ks.sendKey(s);
            break;    
    }   
    console.log(text);

    break
    case 'system':  
      console.log('[system]: ' + message.text)
      break
    case 'tick':  
    case 'debug':
    default:  
  };
});
