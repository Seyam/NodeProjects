/* -----------------------------                                                
  BARK TRACKER
  Justin Smith - justin@isamaker.com
  @justinIsAMaker
 
  Listen for sound over a certain threshold, report that sound to a feed on data
------------------------------ */

// Require libraries
//var m = require('mraa');
var request = require('request');
var moment = require('moment');
var momentTimezone = require('moment-timezone');

  var x=function(){
    // Set the current time with my timezone, format the date and time
    var currentTime = moment().tz("America/Chicago").format('HH:mm:ss - MM/DD/YYYY');
    // Use the request library to hit the Sparkfun URL - make sure you replace the applicable parts with your data
    request('http://data.sparkfun.com/input/[g6RQKyL9nKIMpzr6VwD7]?private_key=[qznwo5y21oSAGjbJmV5Y]&temp=' + 50 + '&localtime=' + currentTime, function(error, response, body){
      console.log(response.statusCode);

      // If the response is good, wait 10 seconds before we start checking again 
      if(response.statusCode === 200){
        console.log('posted successfully with a sound value of ' + 50 + ' at ' + currentTime); 
      } else {
        console.log('oops, there was an error');
        console.log(response.statusCode + ' :::: ' + response.body);
      }
    }
    
  }


  setInterval(x,2000);