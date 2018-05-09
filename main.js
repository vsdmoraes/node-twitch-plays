var tw = require('twitch-webchat');
var robot = require("robotjs");
var channelName = 'mestre_ladino';

var controls = tw.start( channelName, function (err, message) {
  if (err) throw err
 
  switch (message.type) {
    case 'chat': // chat message from the channel 
      //var user = message.from
      var text = message.text.toLowerCase(); // chat message content as text string 
      //var html = message.html // chat message content as html string 
      try {
        robot.keyTap(text);
      }
      catch(errMsg){
        console.log(errMsg +" - "+ text);
      }
      //var isModerator = !!message.moderator // user is a moderator 
      //var isSubscriber = !!message.subscriber // user is a subscriber 
      //var isPrime = !!message.prime // user is twitch prime member 
 
      //console.log(user + ": " + text)
      break
    case 'system': // system message from the channel 
      // (subscription messages, channel mode messages etc) 
      console.log('[system]: ' + message.text)
      break
    case 'tick': // DOM polled for messages 
    case 'debug': // various debug messages 
    default: // ignore 
  };
});